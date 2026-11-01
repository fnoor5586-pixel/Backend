const getAllProducts = (req, res) => {
    console.log("get all products");

    res.status(200).json({
        message: "Products fetched successfully"
    });
};

export default getAllProducts;
