import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('bankAccounts') // Posso definir a rota aqui, exemplo /bankAccounts]
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('customers') // Método da solicitação CRUD || Posso definir a rota ou subrotas aqui, exemplo /bankAccounts/customers]
  getHello(): string {
    return 'Hello World!';
  }

  @Get('exemplo')
  exemplo() {
    return this.appService.solucionaExemplo();
  }
}
