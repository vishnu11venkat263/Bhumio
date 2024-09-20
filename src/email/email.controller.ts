import { Controller, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('emails')
export class EmailController {
    constructor(private readonly emailService: EmailService) { }

    @Get('send')
    async sendEmail() {
        const to = "vishnu4venkat@gmail.com";
        const subject = "Bhumio Testing";
        const text = "Hope it is successfull";
        await this.emailService.sendEmail(to, subject, text);
        return { message: 'Email sent successfully' };
    }
}