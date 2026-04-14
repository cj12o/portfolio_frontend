export {}

type emailFormData = {
    email:string
    message:string
    name:string
}

export async function checkServerStatus() {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/health", {
    method: "GET",
  });
  return res.json();
}


export async function sendEmail(formData:emailFormData) {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  return res.json();
}
