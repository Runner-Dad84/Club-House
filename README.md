Database clubhouse_database

TABLE members
member_id serial primary key
first TEXT
last TEXT
username TEXT
password TEXT
status TEXT

TABLE messages
message_id serail primary key
message TEXT
created_at TIMESTAMP DEFAULT Current_timestamp
msg_id INT references members(member_id)




