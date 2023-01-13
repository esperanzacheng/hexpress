FROM node:alpine
COPY . /app
WORKDIR /app
# ARG rds_host=$rds_host
# ARG rds_user=$rds_user
# ARG rds_password=$rds_password
# ARG rds_port=$rds_port
# ARG rds_database=$rds_database
# ARG AWS_BUCKET_NAME=$AWS_BUCKET_NAME
# ARG AWS_BUCKET_REGION=$AWS_BUCKET_REGION
# ARG AWS_ACCESS_KEY=$AWS_ACCESS_KEY
# ARG AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
CMD npm run start