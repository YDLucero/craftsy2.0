module.exports = (sequelize,  dataTypes) => {
    const alias = "Origin";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        country : {
            type : dataTypes.STRING,
            allowNull : false,
        },
        flag : {
            type : dataTypes.STRING,
            defaultValue : null

        }
    }
    const config = {
        tableName : "origins",
        timestamps : true,
        //underscored : true
    }

    const Origin = sequelize.define(alias, cols, config)

    return Origin
}