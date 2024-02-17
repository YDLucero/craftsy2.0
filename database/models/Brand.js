module.exports = (sequelize,  dataTypes) => {
    const alias = "Brand";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING,
            allowNull : false,
        },
        image : {
            type : dataTypes.STRING,
            defaultValue : null

        },
        originId : {
            type : dataTypes.INTEGER,
            defaultValue : 1
        }
    }
    const config = {
        tableName : "brands",
        timestamps : true,
        //underscored : true
    }

    const Brand = sequelize.define(alias, cols, config)

    return Brand
}