module.exports = (sequelize,  dataTypes) => {
    const alias = "Image";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        file : {
            type : dataTypes.STRING,
            defaultValue : null
        },
        main : {
            type : dataTypes.BOOLEAN,
            defaultValue : null

        },
        productId : {
            type : dataTypes.INTEGER,
        }
    }
    const config = {
        tableName : "images",
        timestamps : true,
        //underscored : true
    }

    const Image = sequelize.define(alias, cols, config)

    return Image
}