import { GameDB, UserDB } from "../db.js";

const gameRsolver = {
    Query: {
        gamesquery() {
            return GameDB
        },
        singlegamequery(_, args) {
            return GameDB.find((i) => i.id === args.id)
        }
    },
    gameSchema: {
        inUser(parent) {
            return UserDB.filter((i) => i.id === parent.userId)
        }
    }
}
export default gameRsolver