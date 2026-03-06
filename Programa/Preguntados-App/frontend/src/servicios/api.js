const API_URL = "http://localhost:3001";

export async function obtenerPreguntas() {
    const response = await fetch(`${API_URL}/preguntas`);
    return response.json();
}

export async function obtenerHistorial() {
    const response = await fetch(`${API_URL}/historial`);
    return response.json();
}

export async function guardarResultado(resultado) {
    await fetch(`${API_URL}/historial`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(resultado)
    });
}