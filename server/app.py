from flask import Flask, send_file, jsonify, request
import mysql.connector
from flask_cors import CORS
from io import BytesIO

app = Flask(__name__)
CORS(app, resources={r'/*': {"origins": "*"}})

# Configuration de la base de données
db_config = {
    'host': '146.59.157.164',
    'user': 'transdi',
    'password': 'satpoz-hubna8-gebKyf',
    'database': 'breakdance',
    'port': 8084
}

# Fonction pour se connecter à la base de données
def connect_to_database():
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except mysql.connector.Error as err:
        print(f"Erreur de connexion à la base de données: {err}")
        return None
    
@app.route('/')
def index():
    return "OK";

@app.route('/mouvements')
def getListMouvements():
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500
    cursor = conn.cursor()
    cursor.execute("SELECT Id_mvt, Mouvement.Nom, Famille.nom FROM Famille JOIN Mouvement ON Famille.Id = Mouvement.Famille")
    # cursor.execute("SELECT Id_mvt, Nom FROM Mouvement")
    result = cursor.fetchall()
    cursor.close()
    conn.close()
    mouvements = [{'id': row[0], 'nom': row[1], 'famille': row[2]} for row in result]
    # mouvements = [{'id': row[0], 'nom': row[1]} for row in result]
    return jsonify(mouvements)

@app.route('/image/<int:id_mvt>')
def getImage(id_mvt):
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500
    cursor = conn.cursor()
    cursor.execute("SELECT image FROM Mouvement WHERE Id_mvt=%s LIMIT 1", (id_mvt,))
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    if result and result[0]:
        image_blob = result[0]
        return send_file(BytesIO(image_blob), mimetype='image/jpeg')
    else:
        return "No image found", 404

@app.route('/video/<int:id_mvt>')
def video(id_mvt):
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500
    cursor = conn.cursor()
    cursor.execute("SELECT Video FROM Mouvement WHERE Id_mvt=%s LIMIT 1", (id_mvt,))
    result = cursor.fetchone()
    cursor.close()
    conn.close()
    if result and result[0]:
        video_blob = result[0]
        return send_file(BytesIO(video_blob), mimetype='video/mp4')
    else:
        return "No video found", 404

@app.route('/data/<int:id_mvt>')
def getData(id_mvt):
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500
    cursor = conn.cursor()

    cursor.execute("SELECT description FROM Mouvement WHERE Id_mvt=%s LIMIT 1", (id_mvt,))
    descriptionResult = cursor.fetchone()
    cursor.execute("SELECT Famille.nom FROM Famille JOIN Mouvement ON Famille.Id = Mouvement.Famille WHERE Mouvement.Id_mvt=%s LIMIT 1", (id_mvt,))
    familleResult = cursor.fetchone()
    cursor.execute("SELECT nom FROM Mouvement WHERE Id_mvt=%s LIMIT 1", (id_mvt,))
    titreResult = cursor.fetchone()
    cursor.execute("SELECT LimiteAge FROM Mouvement WHERE Id_mvt=%s LIMIT 1", (id_mvt,))
    ageResult = cursor.fetchone()

    cursor.close()
    conn.close()

    if descriptionResult and familleResult and titreResult and ageResult:
        return jsonify({
            'description': descriptionResult[0],
            'famille': familleResult[0],
            'titre': titreResult[0],
            'age': ageResult[0]
        })
    else:
        return jsonify({
            'description': descriptionResult[0] if descriptionResult else 'No description found',
            'famille': familleResult[0] if familleResult else 'No famille found',
            'titre': titreResult[0] if titreResult else 'No titre found',
            'age': ageResult[0] if ageResult else 'No age found'
        }), 404

@app.route('/addMouvement', methods=['POST'])
def ajouterMouvement():
    if 'video' not in request.files or 'image' not in request.files:
        return "Missing files", 400

    video = request.files['video']
    image = request.files['image']
    
    if video.content_length > 16 * 1024 * 1024 or image.content_length > 16 * 1024 * 1024:
        return "File too large", 400
    
    nom = request.form.get('nom')
    description = request.form.get('description') or ""
    famille = request.form.get('famille')
    limite_age = request.form.get('limite_age') or 0
    
    if not nom or not description or not famille or famille not in ['0', '1', '2', '3']:
        return "Invalid data", 400

    famille = int(famille)
    limite_age = int(limite_age)
    
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500

    cursor = conn.cursor()
    cursor.execute("INSERT INTO `Mouvement` (`Id_mvt`, `Nom`, `Description`, `Video`, `LimiteAge`, `Famille`, `PartieCorps`, `Image`) VALUES (NULL, %s, %s, %s, %s, %s, 0, %s)", 
                   (nom, description, video.read(), limite_age, famille, image.read()))
    conn.commit()
    cursor.close()
    conn.close()
    
    return "Mouvement ajouté avec succès", 201

@app.route('/supprimerMouvement/<int:id_mvt>', methods=['DELETE'])
def supprimerMouvement(id_mvt):
    conn = connect_to_database()
    if conn is None:
        return "Erreur de connexion à la base de données", 500
    cursor = conn.cursor()
    cursor.execute("DELETE FROM Mouvement WHERE Id_mvt=%s", (id_mvt,))
    conn.commit()
    cursor.close()
    conn.close()
    return "Mouvement supprimé avec succès", 200


if __name__ == '__main__':

    app.run(debug=False, port=5500)