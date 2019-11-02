module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("users", "avatar_id", {
            onUpdate: "CASCADE",
            onDelete: "SET NULL",
            type: Sequelize.INTEGER,
            refereces: { model: "files", key: "id" },
        });
    },

    down: queryInterface => queryInterface.removeColumn("users", "avatar_id"),
};
