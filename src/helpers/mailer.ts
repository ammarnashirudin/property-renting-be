import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "./nodemailer";

export async function sendMail(
    to: string,
    subject: string,
    templateName: string,
    data: any,
) {
    const templatePath = path.join(__dirname, `../templates/${templateName}.hbs`);
    const templateSource = await fs.promises.readFile(templatePath, "utf-8");
    const template = handlebars.compile(templateSource);

    const html = template(data);

    await transporter.sendMail({
        to,
        subject,
        html,
    });   
}