const authBearer = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // 1. Cek apakah header Authorization ada [cite: 87-90]
    if (!authHeader) {
        return res.status(401).json({ message: "No authorization header" });
    }

    // 2. Cek format Bearer [cite: 91-94]
    if (!authHeader.startsWith("Bearer")) {
        return res.status(401).json({ message: "Bearer token required" });
    }

    // 3. Ambil token dan validasi [cite: 95-101]
    const token = authHeader.split(" ")[1];
    const VALID_TOKEN = "12345TOKENRAHASIA"; // Token hardcode sesuai soal

    if (token !== VALID_TOKEN) {
        return res.status(403).json({ message: "Invalid token" });
    }

    next(); // Lanjut ke controller
};

module.exports = authBearer;