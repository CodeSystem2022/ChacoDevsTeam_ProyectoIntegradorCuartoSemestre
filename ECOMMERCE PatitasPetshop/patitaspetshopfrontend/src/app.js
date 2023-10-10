import express from "express";
import morgan from "morgan";
//implementar los imports para conectar los endpoints
import cookieParser from "cookie-parser";

const app = express();
//middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.get("/", (req, res) => res.json({ message: "Bienvenidos a mi proyecto"}));
app.use('/product',tareasRoutes);
app.use('/customer',authRoutes);

//manejando errores
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message: err.message
    });
});

export default app;