const viewEngine = (app) => {
    app.set("view engine", "ejs");
    app.set("views", "./src/views");  // Đảm bảo rằng đường dẫn này chính xác
};

export default viewEngine;
