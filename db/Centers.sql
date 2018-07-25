CREATE TABLE centers (
    id SERIAL PRIMARY KEY,
    organization text,
    services_offered text,
    address text,
    hours text,
    phone text,
    maplink text,
    userid integer 
);

-- REFERENCES centers(id) ON UPDATE CASCADE