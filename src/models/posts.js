import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

//Creando modelo tabla Post
export const PostModel = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.STRING,
        allowNull: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: true
})

