# flask-app/Dockerfile
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 5500

# Define the command to run the application
CMD ["gunicorn", "--workers=2", "app:app", "-b", ":5500"]

