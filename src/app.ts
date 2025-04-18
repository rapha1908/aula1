import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import { PersonRoutes } from '@/http/controllers/person/routes'
import { UserRoutes } from '@/http/controllers/user/routes'
import { globalErrorHandler } from './utils/global-error-handler'
import { AddressRoutes } from './http/controllers/address/routes'
import { productRoutes } from './http/controllers/product/routes,'

export const app = fastify()

app.register(PersonRoutes)
app.register(UserRoutes)
app.register(AddressRoutes)
app.register(productRoutes)

app.setErrorHandler(globalErrorHandler)
