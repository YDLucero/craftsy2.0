module.exports = (sequelize,  dataTypes) => {
    const alias = "Product";
    const cols = {
        id : {
            type : dataTypes.INTEGER,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        name : {
            type : dataTypes.STRING,
            allowNull : false
        },
        description : {
            type : dataTypes.TEXT,
            allowNull : false
        },
        price : {
            type : dataTypes.INTEGER.UNSIGNED,
            allowNull : false
        },
        discount : {
            type : dataTypes.INTEGER.UNSIGNED,
            defaultValue : 0
        },
        image : {
            type : dataTypes.STRING,
            defaultValue : null
        },
        sectionId : {
            type : dataTypes.INTEGER,
            defaultValue : 1
        },
        brandId : {
            type : dataTypes.INTEGER,
            allowNull : false
        }
    }
    const config = {
        tableName : "products",
        timestamps : true,
        //underscored : true
    }

    const Product = sequelize.define(alias, cols, config)

    return Product
}