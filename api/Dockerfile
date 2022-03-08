FROM python:3.8

WORKDIR /app

EXPOSE 5050

COPY Pipfile Pipfile.lock ./

RUN pip install pipenv
RUN pipenv lock --requirements > requirements.txt
RUN pip install -r requirements.txt
RUN pip install flask==1.1.4
RUN pip install markupsafe~=2.0.1

COPY . ./

CMD ["python", "main.py"]