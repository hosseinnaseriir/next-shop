export default function email(req, res) {
  if (req.method === "POST") {
    // console.log(req.body);
    // .........
    // ................
    res.json({
      response: "email successfully send!",
      yourMessage: req.body.text,
      yourEmail: req.body.email
    });
  }
}
