import path from "path";
import sqlite3 from "sqlite3";

export class Model{
    public async openDb(){
        return new Promise<any>(resolve=> {
            const db_path = path.resolve(__dirname, 'Turno_facil');
            const db: any = new sqlite3.Database(db_path,
                (err: any) => {
                    if (err) throw err;
                    else {
                        db.run('PRAGMA journal_mode = WAL;');
                        db.run('PRAGMA synchronous = OFF');
                        db.run('PRAGMA foreign_keys = ON;');                        }
                });
            resolve(db);
        });
    }
}