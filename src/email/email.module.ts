import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';

@Module({
    imports: [
        MailerModule.forRootAsync({
            useFactory: async () => ({
                transport: {
                    host: '',
                    port: 587,
                    secure: false,
                    auth: {
                        user: '',
                        pass: '',
                    },
                },
                defaults: {
                    from: '"No reply" <>',
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