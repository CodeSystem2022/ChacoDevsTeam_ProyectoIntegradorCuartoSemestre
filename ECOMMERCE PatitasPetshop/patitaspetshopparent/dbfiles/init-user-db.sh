#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER springbootuser WITH PASSWORD 'qwerty';
    CREATE DATABASE springboot;
     \connect springboot;
    CREATE SCHEMA springbootschema;
    GRANT ALL PRIVILEGES ON DATABASE springboot TO springbootuser;
    GRANT ALL PRIVILEGES ON SCHEMA springbootschema TO springbootuser;
EOSQL