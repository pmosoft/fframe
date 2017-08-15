---------------------------------
-- database 생성
---------------------------------
create database fframe;

---------------------------------
-- 유저 생성
---------------------------------

-- 모든 ip 허용
create user 'fframe'@'%' identified by 'f1234';
grant all privileges on fframe.* to 'fframe'@'%';

create user 'fframe'@'localhost' identified by 'f1234';
create user 'fframe'@'pmosoft.net' identified by 'f1234';
create user 'fframe'@'182.228.242.133' identified by 'f1234'; -- cafe24 보안서버

grant all privileges on fframe.* to fframe@localhost;
grant all privileges on fframe.* to fframe@pmosoft.net;
grant all privileges on fframe.* to fframe@182.228.242.133;

---------------------------------
-- utf8
---------------------------------
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

---------------------------------
-- 대소문자
---------------------------------
show variables like 'lower_case_table_names'
;

vi /etc/my.cnf

---------------------------------
-- 복원
---------------------------------
mysql -ufframe -pf1234 < fframe_backup.sql

mysql -uroot -plife200727

