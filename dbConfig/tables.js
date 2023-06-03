let table = {
  user: `CREATE TABLE IF NOT EXISTS User (
        id Int(11) NOT NULL auto_increment,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    )`,
};

export default table;
