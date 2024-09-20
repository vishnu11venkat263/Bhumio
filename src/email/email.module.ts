import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: async () => ({
                transport: {
                    host: 'smtp.sendgrid.net',
                    port: 587,
                    secure: false,
                    auth: {
                        user: 'apikey',
                        pass: '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',
                    },
                },
                defaults: {
                    from: '"Vishnu" <vishnu.v@eimsolutions.com>',
                },
                // template: {
                //     dir: join(__dirname, './templates'),
                //     adapter: new HandlebarsAdapter(),
                //     options: {
                //         strict: true,
                //     },
                // },
            }),
            // inject: [ConfigService],
        }),
    ],
    controllers: [EmailController],
    providers: [EmailService],
    exports: [EmailService],
})
export class EmailModule { }