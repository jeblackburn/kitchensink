create sequence member_seq as integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

create table member (
    id integer primary key,
    name varchar(50) not null,
    email varchar(255) not null unique,
    phone_number integer
);