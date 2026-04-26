const express = express()

app.post("/api/action", async (req, res) => {
    try {
        const { someData } = req.body;

        // backend logic here

        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});