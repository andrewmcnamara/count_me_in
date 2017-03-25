DROP DATABASE IF EXISTS count_me_in;
CREATE DATABASE count_me_in;

\c count_me_in;

CREATE TABLE classes (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  description VARCHAR
);

CREATE TABLE class_schedules (
  ID SERIAL PRIMARY KEY,
  class_id INTEGER,
  starts_at TIMESTAMP,
  ends_at TIMESTAMP,
  capacity VARCHAR
);

CREATE TABLE participants (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  email VARCHAR
);

CREATE TABLE class_participations (
 class_id INTEGER,
 participant_id INTEGER
);

INSERT INTO classes (name, description)VALUES
 ('Yoga', 'Relacing yoga class'),
('Running', 'Learn to run for your life');

INSERT INTO participants(name,email) VALUES
('Mandy Jane','manday_jane@example.com'),
('Jim Ricardo', 'jim_ricardo@example.com');


