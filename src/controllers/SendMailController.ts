import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'

class SendMailController {

  async execute(request: Request, respose: Response) {
    const { email, survey_id } = request.body

  }
}