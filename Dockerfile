FROM node:20-bookworm
COPY . .
RUN npm install
RUN pip install -r requirements.txt
CMD ["python3", "main.py"]