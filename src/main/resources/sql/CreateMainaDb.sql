create user 'fframe'@'localhost' identified by 'f1234';

grant all privileges on fframe.* to fframe@localhost;

create database fframe;


-- uft8 Ã³¸®
"c:\Program Files\MariaDB 10.2\data\my.ini"

[mysqld]
init_connect="SET collation_connection = utf8_general_ci"
init_connect="SET NAMES utf8"
character-set-server = utf8
collation-server = utf8_general_ci

[client]
default-character-set = utf8

[mysqldump]
default-character-set = utf8

[mysql]
default-character-set = utf8
