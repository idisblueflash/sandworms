create table coder
(
    id int not null auto_increment,
    nick varchar(255),
    name varchar(255),
    email varchar(255) not null,
    male bit,
    primary key (id)
);
