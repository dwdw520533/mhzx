create table dbo.roles (
    roleid int not null,
    userid int not null,
    name varchar(32) not null,
    PRIMARY KEY (roleid)
)

create index user_id_index on dbo.roles (userid);