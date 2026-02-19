
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tenant
 * 
 */
export type Tenant = $Result.DefaultSelection<Prisma.$TenantPayload>
/**
 * Model EmailToken
 * 
 */
export type EmailToken = $Result.DefaultSelection<Prisma.$EmailTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model PropertyCategory
 * 
 */
export type PropertyCategory = $Result.DefaultSelection<Prisma.$PropertyCategoryPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomAvailability
 * 
 */
export type RoomAvailability = $Result.DefaultSelection<Prisma.$RoomAvailabilityPayload>
/**
 * Model PeakSeasonRate
 * 
 */
export type PeakSeasonRate = $Result.DefaultSelection<Prisma.$PeakSeasonRatePayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model PaymentLog
 * 
 */
export type PaymentLog = $Result.DefaultSelection<Prisma.$PaymentLogPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ROLE: {
  TENANT: 'TENANT',
  USER: 'USER'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const ORDER_STATUS: {
  Menunggu_Pembayaran: 'Menunggu_Pembayaran',
  Menunggu_Konfirmasi_Pembayaran: 'Menunggu_Konfirmasi_Pembayaran',
  Dibatalkan: 'Dibatalkan'
};

export type ORDER_STATUS = (typeof ORDER_STATUS)[keyof typeof ORDER_STATUS]


export const PAYMENT_STATUS: {
  Pembayaran_Diterima: 'Pembayaran_Diterima',
  Pembayaran_Ditolak: 'Pembayaran_Ditolak',
  Pembayaran_Dikembalikan: 'Pembayaran_Dikembalikan'
};

export type PAYMENT_STATUS = (typeof PAYMENT_STATUS)[keyof typeof PAYMENT_STATUS]

}

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type ORDER_STATUS = $Enums.ORDER_STATUS

export const ORDER_STATUS: typeof $Enums.ORDER_STATUS

export type PAYMENT_STATUS = $Enums.PAYMENT_STATUS

export const PAYMENT_STATUS: typeof $Enums.PAYMENT_STATUS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenant`: Exposes CRUD operations for the **Tenant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tenants
    * const tenants = await prisma.tenant.findMany()
    * ```
    */
  get tenant(): Prisma.TenantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailToken`: Exposes CRUD operations for the **EmailToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailTokens
    * const emailTokens = await prisma.emailToken.findMany()
    * ```
    */
  get emailToken(): Prisma.EmailTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyCategory`: Exposes CRUD operations for the **PropertyCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyCategories
    * const propertyCategories = await prisma.propertyCategory.findMany()
    * ```
    */
  get propertyCategory(): Prisma.PropertyCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomAvailability`: Exposes CRUD operations for the **RoomAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomAvailabilities
    * const roomAvailabilities = await prisma.roomAvailability.findMany()
    * ```
    */
  get roomAvailability(): Prisma.RoomAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.peakSeasonRate`: Exposes CRUD operations for the **PeakSeasonRate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PeakSeasonRates
    * const peakSeasonRates = await prisma.peakSeasonRate.findMany()
    * ```
    */
  get peakSeasonRate(): Prisma.PeakSeasonRateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentLog`: Exposes CRUD operations for the **PaymentLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentLogs
    * const paymentLogs = await prisma.paymentLog.findMany()
    * ```
    */
  get paymentLog(): Prisma.PaymentLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tenant: 'Tenant',
    EmailToken: 'EmailToken',
    PasswordResetToken: 'PasswordResetToken',
    PropertyCategory: 'PropertyCategory',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Room: 'Room',
    RoomAvailability: 'RoomAvailability',
    PeakSeasonRate: 'PeakSeasonRate',
    Order: 'Order',
    PaymentLog: 'PaymentLog',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tenant" | "emailToken" | "passwordResetToken" | "propertyCategory" | "property" | "propertyImage" | "room" | "roomAvailability" | "peakSeasonRate" | "order" | "paymentLog" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tenant: {
        payload: Prisma.$TenantPayload<ExtArgs>
        fields: Prisma.TenantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findFirst: {
            args: Prisma.TenantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          findMany: {
            args: Prisma.TenantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          create: {
            args: Prisma.TenantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          createMany: {
            args: Prisma.TenantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TenantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          delete: {
            args: Prisma.TenantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          update: {
            args: Prisma.TenantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          deleteMany: {
            args: Prisma.TenantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TenantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>[]
          }
          upsert: {
            args: Prisma.TenantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantPayload>
          }
          aggregate: {
            args: Prisma.TenantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenant>
          }
          groupBy: {
            args: Prisma.TenantGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantCountArgs<ExtArgs>
            result: $Utils.Optional<TenantCountAggregateOutputType> | number
          }
        }
      }
      EmailToken: {
        payload: Prisma.$EmailTokenPayload<ExtArgs>
        fields: Prisma.EmailTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          findMany: {
            args: Prisma.EmailTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>[]
          }
          create: {
            args: Prisma.EmailTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          createMany: {
            args: Prisma.EmailTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          update: {
            args: Prisma.EmailTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailToken>
          }
          groupBy: {
            args: Prisma.EmailTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      PropertyCategory: {
        payload: Prisma.$PropertyCategoryPayload<ExtArgs>
        fields: Prisma.PropertyCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findFirst: {
            args: Prisma.PropertyCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findMany: {
            args: Prisma.PropertyCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          create: {
            args: Prisma.PropertyCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          createMany: {
            args: Prisma.PropertyCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          delete: {
            args: Prisma.PropertyCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          update: {
            args: Prisma.PropertyCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PropertyCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PropertyCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          aggregate: {
            args: Prisma.PropertyCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyCategory>
          }
          groupBy: {
            args: Prisma.PropertyCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomAvailability: {
        payload: Prisma.$RoomAvailabilityPayload<ExtArgs>
        fields: Prisma.RoomAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.RoomAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findMany: {
            args: Prisma.RoomAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          create: {
            args: Prisma.RoomAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          createMany: {
            args: Prisma.RoomAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoomAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.RoomAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          update: {
            args: Prisma.RoomAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.RoomAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoomAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.RoomAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.RoomAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomAvailability>
          }
          groupBy: {
            args: Prisma.RoomAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      PeakSeasonRate: {
        payload: Prisma.$PeakSeasonRatePayload<ExtArgs>
        fields: Prisma.PeakSeasonRateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeakSeasonRateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          findFirst: {
            args: Prisma.PeakSeasonRateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeakSeasonRateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          findMany: {
            args: Prisma.PeakSeasonRateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>[]
          }
          create: {
            args: Prisma.PeakSeasonRateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          createMany: {
            args: Prisma.PeakSeasonRateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeakSeasonRateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>[]
          }
          delete: {
            args: Prisma.PeakSeasonRateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          update: {
            args: Prisma.PeakSeasonRateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          deleteMany: {
            args: Prisma.PeakSeasonRateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeakSeasonRateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PeakSeasonRateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>[]
          }
          upsert: {
            args: Prisma.PeakSeasonRateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeakSeasonRatePayload>
          }
          aggregate: {
            args: Prisma.PeakSeasonRateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeakSeasonRate>
          }
          groupBy: {
            args: Prisma.PeakSeasonRateGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonRateGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeakSeasonRateCountArgs<ExtArgs>
            result: $Utils.Optional<PeakSeasonRateCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      PaymentLog: {
        payload: Prisma.$PaymentLogPayload<ExtArgs>
        fields: Prisma.PaymentLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          findFirst: {
            args: Prisma.PaymentLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          findMany: {
            args: Prisma.PaymentLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
          }
          create: {
            args: Prisma.PaymentLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          createMany: {
            args: Prisma.PaymentLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
          }
          delete: {
            args: Prisma.PaymentLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          update: {
            args: Prisma.PaymentLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          deleteMany: {
            args: Prisma.PaymentLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>[]
          }
          upsert: {
            args: Prisma.PaymentLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentLogPayload>
          }
          aggregate: {
            args: Prisma.PaymentLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentLog>
          }
          groupBy: {
            args: Prisma.PaymentLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentLogCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentLogCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tenant?: TenantOmit
    emailToken?: EmailTokenOmit
    passwordResetToken?: PasswordResetTokenOmit
    propertyCategory?: PropertyCategoryOmit
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    room?: RoomOmit
    roomAvailability?: RoomAvailabilityOmit
    peakSeasonRate?: PeakSeasonRateOmit
    order?: OrderOmit
    paymentLog?: PaymentLogOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    emailTokens: number
    orders: number
    passwordResetTokens: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailTokens?: boolean | UserCountOutputTypeCountEmailTokensArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    passwordResetTokens?: boolean | UserCountOutputTypeCountPasswordResetTokensArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmailTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TenantCountOutputType
   */

  export type TenantCountOutputType = {
    properties: number
  }

  export type TenantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | TenantCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantCountOutputType
     */
    select?: TenantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantCountOutputType without action
   */
  export type TenantCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCategoryCountOutputType
   */

  export type PropertyCategoryCountOutputType = {
    properties: number
  }

  export type PropertyCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategoryCountOutputType
     */
    select?: PropertyCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    reviews: number
    rooms: number
    images: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | PropertyCountOutputTypeCountReviewsArgs
    rooms?: boolean | PropertyCountOutputTypeCountRoomsArgs
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    orders: number
    peakRates: number
    availabilities: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | RoomCountOutputTypeCountOrdersArgs
    peakRates?: boolean | RoomCountOutputTypeCountPeakRatesArgs
    availabilities?: boolean | RoomCountOutputTypeCountAvailabilitiesArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPeakRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonRateWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    paymentLogs: number
    reviews: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paymentLogs?: boolean | OrderCountOutputTypeCountPaymentLogsArgs
    reviews?: boolean | OrderCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountPaymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLogWhereInput
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    role: $Enums.ROLE | null
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    profileImage: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    role: $Enums.ROLE | null
    name: string | null
    email: string | null
    password: string | null
    isVerified: boolean | null
    profileImage: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    name: number
    email: number
    password: number
    isVerified: number
    profileImage: number
    provider: number
    providerAccountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    profileImage?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    profileImage?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    name?: true
    email?: true
    password?: true
    isVerified?: true
    profileImage?: true
    provider?: true
    providerAccountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    role: $Enums.ROLE
    name: string
    email: string
    password: string | null
    isVerified: boolean
    profileImage: string | null
    provider: string | null
    providerAccountId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    profileImage?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailTokens?: boolean | User$emailTokensArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    tenants?: boolean | User$tenantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    profileImage?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    profileImage?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    isVerified?: boolean
    profileImage?: boolean
    provider?: boolean
    providerAccountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "name" | "email" | "password" | "isVerified" | "profileImage" | "provider" | "providerAccountId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emailTokens?: boolean | User$emailTokensArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    passwordResetTokens?: boolean | User$passwordResetTokensArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    tenants?: boolean | User$tenantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      emailTokens: Prisma.$EmailTokenPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      passwordResetTokens: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      tenants: Prisma.$TenantPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: $Enums.ROLE
      name: string
      email: string
      password: string | null
      isVerified: boolean
      profileImage: string | null
      provider: string | null
      providerAccountId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emailTokens<T extends User$emailTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$emailTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResetTokens<T extends User$passwordResetTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tenants<T extends User$tenantsArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantsArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly role: FieldRef<"User", 'ROLE'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly provider: FieldRef<"User", 'String'>
    readonly providerAccountId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.emailTokens
   */
  export type User$emailTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    where?: EmailTokenWhereInput
    orderBy?: EmailTokenOrderByWithRelationInput | EmailTokenOrderByWithRelationInput[]
    cursor?: EmailTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmailTokenScalarFieldEnum | EmailTokenScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.passwordResetTokens
   */
  export type User$passwordResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.tenants
   */
  export type User$tenantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    where?: TenantWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tenant
   */

  export type AggregateTenant = {
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  export type TenantAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantMinAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    phoneNumber: string | null
  }

  export type TenantMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    companyName: string | null
    phoneNumber: string | null
  }

  export type TenantCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    phoneNumber: number
    _all: number
  }


  export type TenantAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phoneNumber?: true
  }

  export type TenantMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phoneNumber?: true
  }

  export type TenantCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    phoneNumber?: true
    _all?: true
  }

  export type TenantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenant to aggregate.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tenants
    **/
    _count?: true | TenantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantMaxAggregateInputType
  }

  export type GetTenantAggregateType<T extends TenantAggregateArgs> = {
        [P in keyof T & keyof AggregateTenant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenant[P]>
      : GetScalarType<T[P], AggregateTenant[P]>
  }




  export type TenantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantWhereInput
    orderBy?: TenantOrderByWithAggregationInput | TenantOrderByWithAggregationInput[]
    by: TenantScalarFieldEnum[] | TenantScalarFieldEnum
    having?: TenantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantCountAggregateInputType | true
    _avg?: TenantAvgAggregateInputType
    _sum?: TenantSumAggregateInputType
    _min?: TenantMinAggregateInputType
    _max?: TenantMaxAggregateInputType
  }

  export type TenantGroupByOutputType = {
    id: number
    userId: number
    companyName: string
    phoneNumber: string
    _count: TenantCountAggregateOutputType | null
    _avg: TenantAvgAggregateOutputType | null
    _sum: TenantSumAggregateOutputType | null
    _min: TenantMinAggregateOutputType | null
    _max: TenantMaxAggregateOutputType | null
  }

  type GetTenantGroupByPayload<T extends TenantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantGroupByOutputType[P]>
            : GetScalarType<T[P], TenantGroupByOutputType[P]>
        }
      >
    >


  export type TenantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenant"]>

  export type TenantSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    phoneNumber?: boolean
  }

  export type TenantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "phoneNumber", ExtArgs["result"]["tenant"]>
  export type TenantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Tenant$propertiesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TenantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TenantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TenantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TenantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tenant"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      companyName: string
      phoneNumber: string
    }, ExtArgs["result"]["tenant"]>
    composites: {}
  }

  type TenantGetPayload<S extends boolean | null | undefined | TenantDefaultArgs> = $Result.GetResult<Prisma.$TenantPayload, S>

  type TenantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantCountAggregateInputType | true
    }

  export interface TenantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tenant'], meta: { name: 'Tenant' } }
    /**
     * Find zero or one Tenant that matches the filter.
     * @param {TenantFindUniqueArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantFindUniqueArgs>(args: SelectSubset<T, TenantFindUniqueArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tenant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantFindUniqueOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantFindFirstArgs>(args?: SelectSubset<T, TenantFindFirstArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tenant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindFirstOrThrowArgs} args - Arguments to find a Tenant
     * @example
     * // Get one Tenant
     * const tenant = await prisma.tenant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tenants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tenants
     * const tenants = await prisma.tenant.findMany()
     * 
     * // Get first 10 Tenants
     * const tenants = await prisma.tenant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantWithIdOnly = await prisma.tenant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantFindManyArgs>(args?: SelectSubset<T, TenantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tenant.
     * @param {TenantCreateArgs} args - Arguments to create a Tenant.
     * @example
     * // Create one Tenant
     * const Tenant = await prisma.tenant.create({
     *   data: {
     *     // ... data to create a Tenant
     *   }
     * })
     * 
     */
    create<T extends TenantCreateArgs>(args: SelectSubset<T, TenantCreateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tenants.
     * @param {TenantCreateManyArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantCreateManyArgs>(args?: SelectSubset<T, TenantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tenants and returns the data saved in the database.
     * @param {TenantCreateManyAndReturnArgs} args - Arguments to create many Tenants.
     * @example
     * // Create many Tenants
     * const tenant = await prisma.tenant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TenantCreateManyAndReturnArgs>(args?: SelectSubset<T, TenantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tenant.
     * @param {TenantDeleteArgs} args - Arguments to delete one Tenant.
     * @example
     * // Delete one Tenant
     * const Tenant = await prisma.tenant.delete({
     *   where: {
     *     // ... filter to delete one Tenant
     *   }
     * })
     * 
     */
    delete<T extends TenantDeleteArgs>(args: SelectSubset<T, TenantDeleteArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tenant.
     * @param {TenantUpdateArgs} args - Arguments to update one Tenant.
     * @example
     * // Update one Tenant
     * const tenant = await prisma.tenant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantUpdateArgs>(args: SelectSubset<T, TenantUpdateArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tenants.
     * @param {TenantDeleteManyArgs} args - Arguments to filter Tenants to delete.
     * @example
     * // Delete a few Tenants
     * const { count } = await prisma.tenant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantDeleteManyArgs>(args?: SelectSubset<T, TenantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantUpdateManyArgs>(args: SelectSubset<T, TenantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tenants and returns the data updated in the database.
     * @param {TenantUpdateManyAndReturnArgs} args - Arguments to update many Tenants.
     * @example
     * // Update many Tenants
     * const tenant = await prisma.tenant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tenants and only return the `id`
     * const tenantWithIdOnly = await prisma.tenant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TenantUpdateManyAndReturnArgs>(args: SelectSubset<T, TenantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tenant.
     * @param {TenantUpsertArgs} args - Arguments to update or create a Tenant.
     * @example
     * // Update or create a Tenant
     * const tenant = await prisma.tenant.upsert({
     *   create: {
     *     // ... data to create a Tenant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tenant we want to update
     *   }
     * })
     */
    upsert<T extends TenantUpsertArgs>(args: SelectSubset<T, TenantUpsertArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tenants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantCountArgs} args - Arguments to filter Tenants to count.
     * @example
     * // Count the number of Tenants
     * const count = await prisma.tenant.count({
     *   where: {
     *     // ... the filter for the Tenants we want to count
     *   }
     * })
    **/
    count<T extends TenantCountArgs>(
      args?: Subset<T, TenantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantAggregateArgs>(args: Subset<T, TenantAggregateArgs>): Prisma.PrismaPromise<GetTenantAggregateType<T>>

    /**
     * Group by Tenant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantGroupByArgs['orderBy'] }
        : { orderBy?: TenantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tenant model
   */
  readonly fields: TenantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tenant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Tenant$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Tenant$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tenant model
   */
  interface TenantFieldRefs {
    readonly id: FieldRef<"Tenant", 'Int'>
    readonly userId: FieldRef<"Tenant", 'Int'>
    readonly companyName: FieldRef<"Tenant", 'String'>
    readonly phoneNumber: FieldRef<"Tenant", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tenant findUnique
   */
  export type TenantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findUniqueOrThrow
   */
  export type TenantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant findFirst
   */
  export type TenantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findFirstOrThrow
   */
  export type TenantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenant to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tenants.
     */
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant findMany
   */
  export type TenantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter, which Tenants to fetch.
     */
    where?: TenantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tenants to fetch.
     */
    orderBy?: TenantOrderByWithRelationInput | TenantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tenants.
     */
    cursor?: TenantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tenants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tenants.
     */
    skip?: number
    distinct?: TenantScalarFieldEnum | TenantScalarFieldEnum[]
  }

  /**
   * Tenant create
   */
  export type TenantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to create a Tenant.
     */
    data: XOR<TenantCreateInput, TenantUncheckedCreateInput>
  }

  /**
   * Tenant createMany
   */
  export type TenantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tenant createManyAndReturn
   */
  export type TenantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to create many Tenants.
     */
    data: TenantCreateManyInput | TenantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant update
   */
  export type TenantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The data needed to update a Tenant.
     */
    data: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
    /**
     * Choose, which Tenant to update.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant updateMany
   */
  export type TenantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
  }

  /**
   * Tenant updateManyAndReturn
   */
  export type TenantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * The data used to update Tenants.
     */
    data: XOR<TenantUpdateManyMutationInput, TenantUncheckedUpdateManyInput>
    /**
     * Filter which Tenants to update
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tenant upsert
   */
  export type TenantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * The filter to search for the Tenant to update in case it exists.
     */
    where: TenantWhereUniqueInput
    /**
     * In case the Tenant found by the `where` argument doesn't exist, create a new Tenant with this data.
     */
    create: XOR<TenantCreateInput, TenantUncheckedCreateInput>
    /**
     * In case the Tenant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantUpdateInput, TenantUncheckedUpdateInput>
  }

  /**
   * Tenant delete
   */
  export type TenantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
    /**
     * Filter which Tenant to delete.
     */
    where: TenantWhereUniqueInput
  }

  /**
   * Tenant deleteMany
   */
  export type TenantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tenants to delete
     */
    where?: TenantWhereInput
    /**
     * Limit how many Tenants to delete.
     */
    limit?: number
  }

  /**
   * Tenant.properties
   */
  export type Tenant$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Tenant without action
   */
  export type TenantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tenant
     */
    select?: TenantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tenant
     */
    omit?: TenantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantInclude<ExtArgs> | null
  }


  /**
   * Model EmailToken
   */

  export type AggregateEmailToken = {
    _count: EmailTokenCountAggregateOutputType | null
    _avg: EmailTokenAvgAggregateOutputType | null
    _sum: EmailTokenSumAggregateOutputType | null
    _min: EmailTokenMinAggregateOutputType | null
    _max: EmailTokenMaxAggregateOutputType | null
  }

  export type EmailTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type EmailTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type EmailTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type EmailTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    used: number
    _all: number
  }


  export type EmailTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type EmailTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type EmailTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type EmailTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type EmailTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailToken to aggregate.
     */
    where?: EmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokens to fetch.
     */
    orderBy?: EmailTokenOrderByWithRelationInput | EmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailTokens
    **/
    _count?: true | EmailTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmailTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmailTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailTokenMaxAggregateInputType
  }

  export type GetEmailTokenAggregateType<T extends EmailTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailToken[P]>
      : GetScalarType<T[P], AggregateEmailToken[P]>
  }




  export type EmailTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailTokenWhereInput
    orderBy?: EmailTokenOrderByWithAggregationInput | EmailTokenOrderByWithAggregationInput[]
    by: EmailTokenScalarFieldEnum[] | EmailTokenScalarFieldEnum
    having?: EmailTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailTokenCountAggregateInputType | true
    _avg?: EmailTokenAvgAggregateInputType
    _sum?: EmailTokenSumAggregateInputType
    _min?: EmailTokenMinAggregateInputType
    _max?: EmailTokenMaxAggregateInputType
  }

  export type EmailTokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date | null
    used: boolean
    _count: EmailTokenCountAggregateOutputType | null
    _avg: EmailTokenAvgAggregateOutputType | null
    _sum: EmailTokenSumAggregateOutputType | null
    _min: EmailTokenMinAggregateOutputType | null
    _max: EmailTokenMaxAggregateOutputType | null
  }

  type GetEmailTokenGroupByPayload<T extends EmailTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailToken"]>

  export type EmailTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailToken"]>

  export type EmailTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailToken"]>

  export type EmailTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type EmailTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "used", ExtArgs["result"]["emailToken"]>
  export type EmailTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date | null
      used: boolean
    }, ExtArgs["result"]["emailToken"]>
    composites: {}
  }

  type EmailTokenGetPayload<S extends boolean | null | undefined | EmailTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailTokenPayload, S>

  type EmailTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailTokenCountAggregateInputType | true
    }

  export interface EmailTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailToken'], meta: { name: 'EmailToken' } }
    /**
     * Find zero or one EmailToken that matches the filter.
     * @param {EmailTokenFindUniqueArgs} args - Arguments to find a EmailToken
     * @example
     * // Get one EmailToken
     * const emailToken = await prisma.emailToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailTokenFindUniqueArgs>(args: SelectSubset<T, EmailTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailToken
     * @example
     * // Get one EmailToken
     * const emailToken = await prisma.emailToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenFindFirstArgs} args - Arguments to find a EmailToken
     * @example
     * // Get one EmailToken
     * const emailToken = await prisma.emailToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailTokenFindFirstArgs>(args?: SelectSubset<T, EmailTokenFindFirstArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenFindFirstOrThrowArgs} args - Arguments to find a EmailToken
     * @example
     * // Get one EmailToken
     * const emailToken = await prisma.emailToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailTokens
     * const emailTokens = await prisma.emailToken.findMany()
     * 
     * // Get first 10 EmailTokens
     * const emailTokens = await prisma.emailToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailTokenWithIdOnly = await prisma.emailToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailTokenFindManyArgs>(args?: SelectSubset<T, EmailTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailToken.
     * @param {EmailTokenCreateArgs} args - Arguments to create a EmailToken.
     * @example
     * // Create one EmailToken
     * const EmailToken = await prisma.emailToken.create({
     *   data: {
     *     // ... data to create a EmailToken
     *   }
     * })
     * 
     */
    create<T extends EmailTokenCreateArgs>(args: SelectSubset<T, EmailTokenCreateArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailTokens.
     * @param {EmailTokenCreateManyArgs} args - Arguments to create many EmailTokens.
     * @example
     * // Create many EmailTokens
     * const emailToken = await prisma.emailToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailTokenCreateManyArgs>(args?: SelectSubset<T, EmailTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailTokens and returns the data saved in the database.
     * @param {EmailTokenCreateManyAndReturnArgs} args - Arguments to create many EmailTokens.
     * @example
     * // Create many EmailTokens
     * const emailToken = await prisma.emailToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailTokens and only return the `id`
     * const emailTokenWithIdOnly = await prisma.emailToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailToken.
     * @param {EmailTokenDeleteArgs} args - Arguments to delete one EmailToken.
     * @example
     * // Delete one EmailToken
     * const EmailToken = await prisma.emailToken.delete({
     *   where: {
     *     // ... filter to delete one EmailToken
     *   }
     * })
     * 
     */
    delete<T extends EmailTokenDeleteArgs>(args: SelectSubset<T, EmailTokenDeleteArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailToken.
     * @param {EmailTokenUpdateArgs} args - Arguments to update one EmailToken.
     * @example
     * // Update one EmailToken
     * const emailToken = await prisma.emailToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailTokenUpdateArgs>(args: SelectSubset<T, EmailTokenUpdateArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailTokens.
     * @param {EmailTokenDeleteManyArgs} args - Arguments to filter EmailTokens to delete.
     * @example
     * // Delete a few EmailTokens
     * const { count } = await prisma.emailToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailTokenDeleteManyArgs>(args?: SelectSubset<T, EmailTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailTokens
     * const emailToken = await prisma.emailToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailTokenUpdateManyArgs>(args: SelectSubset<T, EmailTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailTokens and returns the data updated in the database.
     * @param {EmailTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailTokens.
     * @example
     * // Update many EmailTokens
     * const emailToken = await prisma.emailToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailTokens and only return the `id`
     * const emailTokenWithIdOnly = await prisma.emailToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmailTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailToken.
     * @param {EmailTokenUpsertArgs} args - Arguments to update or create a EmailToken.
     * @example
     * // Update or create a EmailToken
     * const emailToken = await prisma.emailToken.upsert({
     *   create: {
     *     // ... data to create a EmailToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailTokenUpsertArgs>(args: SelectSubset<T, EmailTokenUpsertArgs<ExtArgs>>): Prisma__EmailTokenClient<$Result.GetResult<Prisma.$EmailTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenCountArgs} args - Arguments to filter EmailTokens to count.
     * @example
     * // Count the number of EmailTokens
     * const count = await prisma.emailToken.count({
     *   where: {
     *     // ... the filter for the EmailTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailTokenCountArgs>(
      args?: Subset<T, EmailTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmailTokenAggregateArgs>(args: Subset<T, EmailTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailTokenAggregateType<T>>

    /**
     * Group by EmailToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmailTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmailTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailToken model
   */
  readonly fields: EmailTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EmailToken model
   */
  interface EmailTokenFieldRefs {
    readonly id: FieldRef<"EmailToken", 'Int'>
    readonly userId: FieldRef<"EmailToken", 'Int'>
    readonly token: FieldRef<"EmailToken", 'String'>
    readonly expiresAt: FieldRef<"EmailToken", 'DateTime'>
    readonly used: FieldRef<"EmailToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * EmailToken findUnique
   */
  export type EmailTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailToken to fetch.
     */
    where: EmailTokenWhereUniqueInput
  }

  /**
   * EmailToken findUniqueOrThrow
   */
  export type EmailTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailToken to fetch.
     */
    where: EmailTokenWhereUniqueInput
  }

  /**
   * EmailToken findFirst
   */
  export type EmailTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailToken to fetch.
     */
    where?: EmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokens to fetch.
     */
    orderBy?: EmailTokenOrderByWithRelationInput | EmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTokens.
     */
    cursor?: EmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTokens.
     */
    distinct?: EmailTokenScalarFieldEnum | EmailTokenScalarFieldEnum[]
  }

  /**
   * EmailToken findFirstOrThrow
   */
  export type EmailTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailToken to fetch.
     */
    where?: EmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokens to fetch.
     */
    orderBy?: EmailTokenOrderByWithRelationInput | EmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailTokens.
     */
    cursor?: EmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailTokens.
     */
    distinct?: EmailTokenScalarFieldEnum | EmailTokenScalarFieldEnum[]
  }

  /**
   * EmailToken findMany
   */
  export type EmailTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailTokens to fetch.
     */
    where?: EmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailTokens to fetch.
     */
    orderBy?: EmailTokenOrderByWithRelationInput | EmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailTokens.
     */
    cursor?: EmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailTokens.
     */
    skip?: number
    distinct?: EmailTokenScalarFieldEnum | EmailTokenScalarFieldEnum[]
  }

  /**
   * EmailToken create
   */
  export type EmailTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailToken.
     */
    data: XOR<EmailTokenCreateInput, EmailTokenUncheckedCreateInput>
  }

  /**
   * EmailToken createMany
   */
  export type EmailTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailTokens.
     */
    data: EmailTokenCreateManyInput | EmailTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailToken createManyAndReturn
   */
  export type EmailTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailTokens.
     */
    data: EmailTokenCreateManyInput | EmailTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailToken update
   */
  export type EmailTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailToken.
     */
    data: XOR<EmailTokenUpdateInput, EmailTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailToken to update.
     */
    where: EmailTokenWhereUniqueInput
  }

  /**
   * EmailToken updateMany
   */
  export type EmailTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailTokens.
     */
    data: XOR<EmailTokenUpdateManyMutationInput, EmailTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailTokens to update
     */
    where?: EmailTokenWhereInput
    /**
     * Limit how many EmailTokens to update.
     */
    limit?: number
  }

  /**
   * EmailToken updateManyAndReturn
   */
  export type EmailTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailTokens.
     */
    data: XOR<EmailTokenUpdateManyMutationInput, EmailTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailTokens to update
     */
    where?: EmailTokenWhereInput
    /**
     * Limit how many EmailTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailToken upsert
   */
  export type EmailTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailToken to update in case it exists.
     */
    where: EmailTokenWhereUniqueInput
    /**
     * In case the EmailToken found by the `where` argument doesn't exist, create a new EmailToken with this data.
     */
    create: XOR<EmailTokenCreateInput, EmailTokenUncheckedCreateInput>
    /**
     * In case the EmailToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailTokenUpdateInput, EmailTokenUncheckedUpdateInput>
  }

  /**
   * EmailToken delete
   */
  export type EmailTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailToken to delete.
     */
    where: EmailTokenWhereUniqueInput
  }

  /**
   * EmailToken deleteMany
   */
  export type EmailTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailTokens to delete
     */
    where?: EmailTokenWhereInput
    /**
     * Limit how many EmailTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailToken without action
   */
  export type EmailTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailToken
     */
    select?: EmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailToken
     */
    omit?: EmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailTokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    token: string | null
    expiresAt: Date | null
    used: boolean | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    used: number
    _all: number
  }


  export type PasswordResetTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    used?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _avg?: PasswordResetTokenAvgAggregateInputType
    _sum?: PasswordResetTokenSumAggregateInputType
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: number
    userId: number
    token: string
    expiresAt: Date | null
    used: boolean
    _count: PasswordResetTokenCountAggregateOutputType | null
    _avg: PasswordResetTokenAvgAggregateOutputType | null
    _sum: PasswordResetTokenSumAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    used?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "used", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      token: string
      expiresAt: Date | null
      used: boolean
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'Int'>
    readonly userId: FieldRef<"PasswordResetToken", 'Int'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly used: FieldRef<"PasswordResetToken", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model PropertyCategory
   */

  export type AggregatePropertyCategory = {
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  export type PropertyCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type PropertyCategorySumAggregateOutputType = {
    id: number | null
  }

  export type PropertyCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PropertyCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type PropertyCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type PropertyCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PropertyCategorySumAggregateInputType = {
    id?: true
  }

  export type PropertyCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PropertyCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type PropertyCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategory to aggregate.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyCategories
    **/
    _count?: true | PropertyCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type GetPropertyCategoryAggregateType<T extends PropertyCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyCategory[P]>
      : GetScalarType<T[P], AggregatePropertyCategory[P]>
  }




  export type PropertyCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoryWhereInput
    orderBy?: PropertyCategoryOrderByWithAggregationInput | PropertyCategoryOrderByWithAggregationInput[]
    by: PropertyCategoryScalarFieldEnum[] | PropertyCategoryScalarFieldEnum
    having?: PropertyCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCategoryCountAggregateInputType | true
    _avg?: PropertyCategoryAvgAggregateInputType
    _sum?: PropertyCategorySumAggregateInputType
    _min?: PropertyCategoryMinAggregateInputType
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type PropertyCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  type GetPropertyCategoryGroupByPayload<T extends PropertyCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PropertyCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategory"]>

  export type PropertyCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["propertyCategory"]>

  export type PropertyCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["propertyCategory"]>

  export type PropertyCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type PropertyCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["propertyCategory"]>
  export type PropertyCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PropertyCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PropertyCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyCategory"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["propertyCategory"]>
    composites: {}
  }

  type PropertyCategoryGetPayload<S extends boolean | null | undefined | PropertyCategoryDefaultArgs> = $Result.GetResult<Prisma.$PropertyCategoryPayload, S>

  type PropertyCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCategoryCountAggregateInputType | true
    }

  export interface PropertyCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyCategory'], meta: { name: 'PropertyCategory' } }
    /**
     * Find zero or one PropertyCategory that matches the filter.
     * @param {PropertyCategoryFindUniqueArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyCategoryFindUniqueArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyCategoryFindUniqueOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyCategoryFindFirstArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany()
     * 
     * // Get first 10 PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyCategoryFindManyArgs>(args?: SelectSubset<T, PropertyCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyCategory.
     * @param {PropertyCategoryCreateArgs} args - Arguments to create a PropertyCategory.
     * @example
     * // Create one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.create({
     *   data: {
     *     // ... data to create a PropertyCategory
     *   }
     * })
     * 
     */
    create<T extends PropertyCategoryCreateArgs>(args: SelectSubset<T, PropertyCategoryCreateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyCategories.
     * @param {PropertyCategoryCreateManyArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCategoryCreateManyArgs>(args?: SelectSubset<T, PropertyCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyCategories and returns the data saved in the database.
     * @param {PropertyCategoryCreateManyAndReturnArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyCategories and only return the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyCategory.
     * @param {PropertyCategoryDeleteArgs} args - Arguments to delete one PropertyCategory.
     * @example
     * // Delete one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.delete({
     *   where: {
     *     // ... filter to delete one PropertyCategory
     *   }
     * })
     * 
     */
    delete<T extends PropertyCategoryDeleteArgs>(args: SelectSubset<T, PropertyCategoryDeleteArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyCategory.
     * @param {PropertyCategoryUpdateArgs} args - Arguments to update one PropertyCategory.
     * @example
     * // Update one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyCategoryUpdateArgs>(args: SelectSubset<T, PropertyCategoryUpdateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyCategories.
     * @param {PropertyCategoryDeleteManyArgs} args - Arguments to filter PropertyCategories to delete.
     * @example
     * // Delete a few PropertyCategories
     * const { count } = await prisma.propertyCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyCategoryDeleteManyArgs>(args?: SelectSubset<T, PropertyCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyCategoryUpdateManyArgs>(args: SelectSubset<T, PropertyCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCategories and returns the data updated in the database.
     * @param {PropertyCategoryUpdateManyAndReturnArgs} args - Arguments to update many PropertyCategories.
     * @example
     * // Update many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyCategories and only return the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyCategory.
     * @param {PropertyCategoryUpsertArgs} args - Arguments to update or create a PropertyCategory.
     * @example
     * // Update or create a PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.upsert({
     *   create: {
     *     // ... data to create a PropertyCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyCategory we want to update
     *   }
     * })
     */
    upsert<T extends PropertyCategoryUpsertArgs>(args: SelectSubset<T, PropertyCategoryUpsertArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryCountArgs} args - Arguments to filter PropertyCategories to count.
     * @example
     * // Count the number of PropertyCategories
     * const count = await prisma.propertyCategory.count({
     *   where: {
     *     // ... the filter for the PropertyCategories we want to count
     *   }
     * })
    **/
    count<T extends PropertyCategoryCountArgs>(
      args?: Subset<T, PropertyCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyCategoryAggregateArgs>(args: Subset<T, PropertyCategoryAggregateArgs>): Prisma.PrismaPromise<GetPropertyCategoryAggregateType<T>>

    /**
     * Group by PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PropertyCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyCategory model
   */
  readonly fields: PropertyCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends PropertyCategory$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategory$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyCategory model
   */
  interface PropertyCategoryFieldRefs {
    readonly id: FieldRef<"PropertyCategory", 'Int'>
    readonly name: FieldRef<"PropertyCategory", 'String'>
    readonly createdAt: FieldRef<"PropertyCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyCategory findUnique
   */
  export type PropertyCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findUniqueOrThrow
   */
  export type PropertyCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findFirst
   */
  export type PropertyCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findFirstOrThrow
   */
  export type PropertyCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findMany
   */
  export type PropertyCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory create
   */
  export type PropertyCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyCategory.
     */
    data: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
  }

  /**
   * PropertyCategory createMany
   */
  export type PropertyCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoryCreateManyInput | PropertyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCategory createManyAndReturn
   */
  export type PropertyCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoryCreateManyInput | PropertyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCategory update
   */
  export type PropertyCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyCategory.
     */
    data: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
    /**
     * Choose, which PropertyCategory to update.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory updateMany
   */
  export type PropertyCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyCategories.
     */
    data: XOR<PropertyCategoryUpdateManyMutationInput, PropertyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCategories to update
     */
    where?: PropertyCategoryWhereInput
    /**
     * Limit how many PropertyCategories to update.
     */
    limit?: number
  }

  /**
   * PropertyCategory updateManyAndReturn
   */
  export type PropertyCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PropertyCategories.
     */
    data: XOR<PropertyCategoryUpdateManyMutationInput, PropertyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCategories to update
     */
    where?: PropertyCategoryWhereInput
    /**
     * Limit how many PropertyCategories to update.
     */
    limit?: number
  }

  /**
   * PropertyCategory upsert
   */
  export type PropertyCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyCategory to update in case it exists.
     */
    where: PropertyCategoryWhereUniqueInput
    /**
     * In case the PropertyCategory found by the `where` argument doesn't exist, create a new PropertyCategory with this data.
     */
    create: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
    /**
     * In case the PropertyCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
  }

  /**
   * PropertyCategory delete
   */
  export type PropertyCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter which PropertyCategory to delete.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory deleteMany
   */
  export type PropertyCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategories to delete
     */
    where?: PropertyCategoryWhereInput
    /**
     * Limit how many PropertyCategories to delete.
     */
    limit?: number
  }

  /**
   * PropertyCategory.properties
   */
  export type PropertyCategory$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * PropertyCategory without action
   */
  export type PropertyCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: number | null
    longitude: number | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    address: string | null
    image: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    description: string | null
    address: string | null
    image: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: number
    description: number
    address: number
    image: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    address?: true
    image?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    address?: true
    image?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    description?: true
    address?: true
    image?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    image?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "categoryId" | "name" | "description" | "address" | "image" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }
  export type PropertyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    tenant?: boolean | TenantDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      category: Prisma.$PropertyCategoryPayload<ExtArgs>
      tenant: Prisma.$TenantPayload<ExtArgs>
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      categoryId: number
      name: string
      description: string
      address: string
      image: string
      latitude: number
      longitude: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PropertyCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategoryDefaultArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tenant<T extends TenantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantDefaultArgs<ExtArgs>>): Prisma__TenantClient<$Result.GetResult<Prisma.$TenantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Property$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Property$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rooms<T extends Property$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Property$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly tenantId: FieldRef<"Property", 'Int'>
    readonly categoryId: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly image: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Float'>
    readonly longitude: FieldRef<"Property", 'Float'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.reviews
   */
  export type Property$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Property.rooms
   */
  export type Property$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    url: string | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    url: string | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    propertyId: number
    url: string
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>

  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "url", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type PropertyImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      url: string
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PropertyImages and returns the data saved in the database.
     * @param {PropertyImageCreateManyAndReturnArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyImageCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages and returns the data updated in the database.
     * @param {PropertyImageUpdateManyAndReturnArgs} args - Arguments to update many PropertyImages.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PropertyImages and only return the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyImageUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly url: FieldRef<"PropertyImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage createManyAndReturn
   */
  export type PropertyImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage updateManyAndReturn
   */
  export type PropertyImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    basePrice: number | null
    capacity: number | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    basePrice: number | null
    capacity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    basePrice: number | null
    capacity: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    basePrice: number | null
    capacity: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    description: number
    basePrice: number
    capacity: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    propertyId?: true
    basePrice?: true
    capacity?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    propertyId?: true
    basePrice?: true
    capacity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    capacity?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    capacity?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    basePrice?: true
    capacity?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    capacity?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Room$ordersArgs<ExtArgs>
    peakRates?: boolean | Room$peakRatesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    capacity?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    capacity?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>

  export type RoomSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    basePrice?: boolean
    capacity?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "name" | "description" | "basePrice" | "capacity" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Room$ordersArgs<ExtArgs>
    peakRates?: boolean | Room$peakRatesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoomIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }
  export type RoomIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      peakRates: Prisma.$PeakSeasonRatePayload<ExtArgs>[]
      availabilities: Prisma.$RoomAvailabilityPayload<ExtArgs>[]
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      name: string
      description: string
      basePrice: number
      capacity: number
      startDate: Date
      endDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rooms and returns the data saved in the database.
     * @param {RoomCreateManyAndReturnArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms and returns the data updated in the database.
     * @param {RoomUpdateManyAndReturnArgs} args - Arguments to update many Rooms.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rooms and only return the `id`
     * const roomWithIdOnly = await prisma.room.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Room$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Room$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    peakRates<T extends Room$peakRatesArgs<ExtArgs> = {}>(args?: Subset<T, Room$peakRatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilities<T extends Room$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Room$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly propertyId: FieldRef<"Room", 'Int'>
    readonly name: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly basePrice: FieldRef<"Room", 'Float'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly startDate: FieldRef<"Room", 'DateTime'>
    readonly endDate: FieldRef<"Room", 'DateTime'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room createManyAndReturn
   */
  export type RoomCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room updateManyAndReturn
   */
  export type RoomUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.orders
   */
  export type Room$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Room.peakRates
   */
  export type Room$peakRatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    where?: PeakSeasonRateWhereInput
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    cursor?: PeakSeasonRateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * Room.availabilities
   */
  export type Room$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    cursor?: RoomAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomAvailability
   */

  export type AggregateRoomAvailability = {
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  export type RoomAvailabilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomAvailabilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomAvailabilityMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
  }

  export type RoomAvailabilityMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
  }

  export type RoomAvailabilityCountAggregateOutputType = {
    id: number
    roomId: number
    date: number
    isAvailable: number
    _all: number
  }


  export type RoomAvailabilityAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomAvailabilitySumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomAvailabilityMinAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
  }

  export type RoomAvailabilityMaxAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
  }

  export type RoomAvailabilityCountAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    _all?: true
  }

  export type RoomAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailability to aggregate.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomAvailabilities
    **/
    _count?: true | RoomAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type GetRoomAvailabilityAggregateType<T extends RoomAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomAvailability[P]>
      : GetScalarType<T[P], AggregateRoomAvailability[P]>
  }




  export type RoomAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithAggregationInput | RoomAvailabilityOrderByWithAggregationInput[]
    by: RoomAvailabilityScalarFieldEnum[] | RoomAvailabilityScalarFieldEnum
    having?: RoomAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomAvailabilityCountAggregateInputType | true
    _avg?: RoomAvailabilityAvgAggregateInputType
    _sum?: RoomAvailabilitySumAggregateInputType
    _min?: RoomAvailabilityMinAggregateInputType
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type RoomAvailabilityGroupByOutputType = {
    id: number
    roomId: number
    date: Date
    isAvailable: boolean
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  type GetRoomAvailabilityGroupByPayload<T extends RoomAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type RoomAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>

  export type RoomAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>

  export type RoomAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>

  export type RoomAvailabilitySelectScalar = {
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
  }

  export type RoomAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "date" | "isAvailable", ExtArgs["result"]["roomAvailability"]>
  export type RoomAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type RoomAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomAvailability"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      date: Date
      isAvailable: boolean
    }, ExtArgs["result"]["roomAvailability"]>
    composites: {}
  }

  type RoomAvailabilityGetPayload<S extends boolean | null | undefined | RoomAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$RoomAvailabilityPayload, S>

  type RoomAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomAvailabilityCountAggregateInputType | true
    }

  export interface RoomAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomAvailability'], meta: { name: 'RoomAvailability' } }
    /**
     * Find zero or one RoomAvailability that matches the filter.
     * @param {RoomAvailabilityFindUniqueArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomAvailabilityFindUniqueArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomAvailabilityFindFirstArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany()
     * 
     * // Get first 10 RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomAvailabilityFindManyArgs>(args?: SelectSubset<T, RoomAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomAvailability.
     * @param {RoomAvailabilityCreateArgs} args - Arguments to create a RoomAvailability.
     * @example
     * // Create one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.create({
     *   data: {
     *     // ... data to create a RoomAvailability
     *   }
     * })
     * 
     */
    create<T extends RoomAvailabilityCreateArgs>(args: SelectSubset<T, RoomAvailabilityCreateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomAvailabilities.
     * @param {RoomAvailabilityCreateManyArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomAvailabilityCreateManyArgs>(args?: SelectSubset<T, RoomAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RoomAvailabilities and returns the data saved in the database.
     * @param {RoomAvailabilityCreateManyAndReturnArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RoomAvailabilities and only return the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoomAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, RoomAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RoomAvailability.
     * @param {RoomAvailabilityDeleteArgs} args - Arguments to delete one RoomAvailability.
     * @example
     * // Delete one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.delete({
     *   where: {
     *     // ... filter to delete one RoomAvailability
     *   }
     * })
     * 
     */
    delete<T extends RoomAvailabilityDeleteArgs>(args: SelectSubset<T, RoomAvailabilityDeleteArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomAvailability.
     * @param {RoomAvailabilityUpdateArgs} args - Arguments to update one RoomAvailability.
     * @example
     * // Update one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomAvailabilityUpdateArgs>(args: SelectSubset<T, RoomAvailabilityUpdateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomAvailabilities.
     * @param {RoomAvailabilityDeleteManyArgs} args - Arguments to filter RoomAvailabilities to delete.
     * @example
     * // Delete a few RoomAvailabilities
     * const { count } = await prisma.roomAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomAvailabilityDeleteManyArgs>(args?: SelectSubset<T, RoomAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomAvailabilityUpdateManyArgs>(args: SelectSubset<T, RoomAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAvailabilities and returns the data updated in the database.
     * @param {RoomAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many RoomAvailabilities.
     * @example
     * // Update many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RoomAvailabilities and only return the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoomAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, RoomAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RoomAvailability.
     * @param {RoomAvailabilityUpsertArgs} args - Arguments to update or create a RoomAvailability.
     * @example
     * // Update or create a RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.upsert({
     *   create: {
     *     // ... data to create a RoomAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomAvailability we want to update
     *   }
     * })
     */
    upsert<T extends RoomAvailabilityUpsertArgs>(args: SelectSubset<T, RoomAvailabilityUpsertArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityCountArgs} args - Arguments to filter RoomAvailabilities to count.
     * @example
     * // Count the number of RoomAvailabilities
     * const count = await prisma.roomAvailability.count({
     *   where: {
     *     // ... the filter for the RoomAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends RoomAvailabilityCountArgs>(
      args?: Subset<T, RoomAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAvailabilityAggregateArgs>(args: Subset<T, RoomAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetRoomAvailabilityAggregateType<T>>

    /**
     * Group by RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomAvailability model
   */
  readonly fields: RoomAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomAvailability model
   */
  interface RoomAvailabilityFieldRefs {
    readonly id: FieldRef<"RoomAvailability", 'Int'>
    readonly roomId: FieldRef<"RoomAvailability", 'Int'>
    readonly date: FieldRef<"RoomAvailability", 'DateTime'>
    readonly isAvailable: FieldRef<"RoomAvailability", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RoomAvailability findUnique
   */
  export type RoomAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findUniqueOrThrow
   */
  export type RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findFirst
   */
  export type RoomAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findFirstOrThrow
   */
  export type RoomAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findMany
   */
  export type RoomAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability create
   */
  export type RoomAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomAvailability.
     */
    data: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
  }

  /**
   * RoomAvailability createMany
   */
  export type RoomAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilityCreateManyInput | RoomAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomAvailability createManyAndReturn
   */
  export type RoomAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilityCreateManyInput | RoomAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAvailability update
   */
  export type RoomAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomAvailability.
     */
    data: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which RoomAvailability to update.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability updateMany
   */
  export type RoomAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomAvailabilities.
     */
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAvailabilities to update
     */
    where?: RoomAvailabilityWhereInput
    /**
     * Limit how many RoomAvailabilities to update.
     */
    limit?: number
  }

  /**
   * RoomAvailability updateManyAndReturn
   */
  export type RoomAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update RoomAvailabilities.
     */
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAvailabilities to update
     */
    where?: RoomAvailabilityWhereInput
    /**
     * Limit how many RoomAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RoomAvailability upsert
   */
  export type RoomAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomAvailability to update in case it exists.
     */
    where: RoomAvailabilityWhereUniqueInput
    /**
     * In case the RoomAvailability found by the `where` argument doesn't exist, create a new RoomAvailability with this data.
     */
    create: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
    /**
     * In case the RoomAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
  }

  /**
   * RoomAvailability delete
   */
  export type RoomAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which RoomAvailability to delete.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability deleteMany
   */
  export type RoomAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailabilities to delete
     */
    where?: RoomAvailabilityWhereInput
    /**
     * Limit how many RoomAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * RoomAvailability without action
   */
  export type RoomAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model PeakSeasonRate
   */

  export type AggregatePeakSeasonRate = {
    _count: PeakSeasonRateCountAggregateOutputType | null
    _avg: PeakSeasonRateAvgAggregateOutputType | null
    _sum: PeakSeasonRateSumAggregateOutputType | null
    _min: PeakSeasonRateMinAggregateOutputType | null
    _max: PeakSeasonRateMaxAggregateOutputType | null
  }

  export type PeakSeasonRateAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: number | null
  }

  export type PeakSeasonRateSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: number | null
  }

  export type PeakSeasonRateMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeakSeasonRateMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    type: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PeakSeasonRateCountAggregateOutputType = {
    id: number
    roomId: number
    startDate: number
    endDate: number
    type: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PeakSeasonRateAvgAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
  }

  export type PeakSeasonRateSumAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
  }

  export type PeakSeasonRateMinAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeakSeasonRateMaxAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PeakSeasonRateCountAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PeakSeasonRateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasonRate to aggregate.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PeakSeasonRates
    **/
    _count?: true | PeakSeasonRateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeakSeasonRateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeakSeasonRateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeakSeasonRateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeakSeasonRateMaxAggregateInputType
  }

  export type GetPeakSeasonRateAggregateType<T extends PeakSeasonRateAggregateArgs> = {
        [P in keyof T & keyof AggregatePeakSeasonRate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeakSeasonRate[P]>
      : GetScalarType<T[P], AggregatePeakSeasonRate[P]>
  }




  export type PeakSeasonRateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeakSeasonRateWhereInput
    orderBy?: PeakSeasonRateOrderByWithAggregationInput | PeakSeasonRateOrderByWithAggregationInput[]
    by: PeakSeasonRateScalarFieldEnum[] | PeakSeasonRateScalarFieldEnum
    having?: PeakSeasonRateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeakSeasonRateCountAggregateInputType | true
    _avg?: PeakSeasonRateAvgAggregateInputType
    _sum?: PeakSeasonRateSumAggregateInputType
    _min?: PeakSeasonRateMinAggregateInputType
    _max?: PeakSeasonRateMaxAggregateInputType
  }

  export type PeakSeasonRateGroupByOutputType = {
    id: number
    roomId: number
    startDate: Date
    endDate: Date
    type: string
    value: number
    createdAt: Date
    updatedAt: Date
    _count: PeakSeasonRateCountAggregateOutputType | null
    _avg: PeakSeasonRateAvgAggregateOutputType | null
    _sum: PeakSeasonRateSumAggregateOutputType | null
    _min: PeakSeasonRateMinAggregateOutputType | null
    _max: PeakSeasonRateMaxAggregateOutputType | null
  }

  type GetPeakSeasonRateGroupByPayload<T extends PeakSeasonRateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeakSeasonRateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeakSeasonRateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeakSeasonRateGroupByOutputType[P]>
            : GetScalarType<T[P], PeakSeasonRateGroupByOutputType[P]>
        }
      >
    >


  export type PeakSeasonRateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasonRate"]>

  export type PeakSeasonRateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasonRate"]>

  export type PeakSeasonRateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peakSeasonRate"]>

  export type PeakSeasonRateSelectScalar = {
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PeakSeasonRateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "startDate" | "endDate" | "type" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["peakSeasonRate"]>
  export type PeakSeasonRateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type PeakSeasonRateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }
  export type PeakSeasonRateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $PeakSeasonRatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PeakSeasonRate"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      startDate: Date
      endDate: Date
      type: string
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["peakSeasonRate"]>
    composites: {}
  }

  type PeakSeasonRateGetPayload<S extends boolean | null | undefined | PeakSeasonRateDefaultArgs> = $Result.GetResult<Prisma.$PeakSeasonRatePayload, S>

  type PeakSeasonRateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PeakSeasonRateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PeakSeasonRateCountAggregateInputType | true
    }

  export interface PeakSeasonRateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PeakSeasonRate'], meta: { name: 'PeakSeasonRate' } }
    /**
     * Find zero or one PeakSeasonRate that matches the filter.
     * @param {PeakSeasonRateFindUniqueArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeakSeasonRateFindUniqueArgs>(args: SelectSubset<T, PeakSeasonRateFindUniqueArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PeakSeasonRate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PeakSeasonRateFindUniqueOrThrowArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeakSeasonRateFindUniqueOrThrowArgs>(args: SelectSubset<T, PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeakSeasonRate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindFirstArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeakSeasonRateFindFirstArgs>(args?: SelectSubset<T, PeakSeasonRateFindFirstArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PeakSeasonRate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindFirstOrThrowArgs} args - Arguments to find a PeakSeasonRate
     * @example
     * // Get one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeakSeasonRateFindFirstOrThrowArgs>(args?: SelectSubset<T, PeakSeasonRateFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PeakSeasonRates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PeakSeasonRates
     * const peakSeasonRates = await prisma.peakSeasonRate.findMany()
     * 
     * // Get first 10 PeakSeasonRates
     * const peakSeasonRates = await prisma.peakSeasonRate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peakSeasonRateWithIdOnly = await prisma.peakSeasonRate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeakSeasonRateFindManyArgs>(args?: SelectSubset<T, PeakSeasonRateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PeakSeasonRate.
     * @param {PeakSeasonRateCreateArgs} args - Arguments to create a PeakSeasonRate.
     * @example
     * // Create one PeakSeasonRate
     * const PeakSeasonRate = await prisma.peakSeasonRate.create({
     *   data: {
     *     // ... data to create a PeakSeasonRate
     *   }
     * })
     * 
     */
    create<T extends PeakSeasonRateCreateArgs>(args: SelectSubset<T, PeakSeasonRateCreateArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PeakSeasonRates.
     * @param {PeakSeasonRateCreateManyArgs} args - Arguments to create many PeakSeasonRates.
     * @example
     * // Create many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeakSeasonRateCreateManyArgs>(args?: SelectSubset<T, PeakSeasonRateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PeakSeasonRates and returns the data saved in the database.
     * @param {PeakSeasonRateCreateManyAndReturnArgs} args - Arguments to create many PeakSeasonRates.
     * @example
     * // Create many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PeakSeasonRates and only return the `id`
     * const peakSeasonRateWithIdOnly = await prisma.peakSeasonRate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeakSeasonRateCreateManyAndReturnArgs>(args?: SelectSubset<T, PeakSeasonRateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PeakSeasonRate.
     * @param {PeakSeasonRateDeleteArgs} args - Arguments to delete one PeakSeasonRate.
     * @example
     * // Delete one PeakSeasonRate
     * const PeakSeasonRate = await prisma.peakSeasonRate.delete({
     *   where: {
     *     // ... filter to delete one PeakSeasonRate
     *   }
     * })
     * 
     */
    delete<T extends PeakSeasonRateDeleteArgs>(args: SelectSubset<T, PeakSeasonRateDeleteArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PeakSeasonRate.
     * @param {PeakSeasonRateUpdateArgs} args - Arguments to update one PeakSeasonRate.
     * @example
     * // Update one PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeakSeasonRateUpdateArgs>(args: SelectSubset<T, PeakSeasonRateUpdateArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PeakSeasonRates.
     * @param {PeakSeasonRateDeleteManyArgs} args - Arguments to filter PeakSeasonRates to delete.
     * @example
     * // Delete a few PeakSeasonRates
     * const { count } = await prisma.peakSeasonRate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeakSeasonRateDeleteManyArgs>(args?: SelectSubset<T, PeakSeasonRateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeakSeasonRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeakSeasonRateUpdateManyArgs>(args: SelectSubset<T, PeakSeasonRateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PeakSeasonRates and returns the data updated in the database.
     * @param {PeakSeasonRateUpdateManyAndReturnArgs} args - Arguments to update many PeakSeasonRates.
     * @example
     * // Update many PeakSeasonRates
     * const peakSeasonRate = await prisma.peakSeasonRate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PeakSeasonRates and only return the `id`
     * const peakSeasonRateWithIdOnly = await prisma.peakSeasonRate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PeakSeasonRateUpdateManyAndReturnArgs>(args: SelectSubset<T, PeakSeasonRateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PeakSeasonRate.
     * @param {PeakSeasonRateUpsertArgs} args - Arguments to update or create a PeakSeasonRate.
     * @example
     * // Update or create a PeakSeasonRate
     * const peakSeasonRate = await prisma.peakSeasonRate.upsert({
     *   create: {
     *     // ... data to create a PeakSeasonRate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PeakSeasonRate we want to update
     *   }
     * })
     */
    upsert<T extends PeakSeasonRateUpsertArgs>(args: SelectSubset<T, PeakSeasonRateUpsertArgs<ExtArgs>>): Prisma__PeakSeasonRateClient<$Result.GetResult<Prisma.$PeakSeasonRatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PeakSeasonRates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateCountArgs} args - Arguments to filter PeakSeasonRates to count.
     * @example
     * // Count the number of PeakSeasonRates
     * const count = await prisma.peakSeasonRate.count({
     *   where: {
     *     // ... the filter for the PeakSeasonRates we want to count
     *   }
     * })
    **/
    count<T extends PeakSeasonRateCountArgs>(
      args?: Subset<T, PeakSeasonRateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeakSeasonRateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PeakSeasonRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeakSeasonRateAggregateArgs>(args: Subset<T, PeakSeasonRateAggregateArgs>): Prisma.PrismaPromise<GetPeakSeasonRateAggregateType<T>>

    /**
     * Group by PeakSeasonRate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeakSeasonRateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeakSeasonRateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeakSeasonRateGroupByArgs['orderBy'] }
        : { orderBy?: PeakSeasonRateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeakSeasonRateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeakSeasonRateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PeakSeasonRate model
   */
  readonly fields: PeakSeasonRateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PeakSeasonRate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeakSeasonRateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PeakSeasonRate model
   */
  interface PeakSeasonRateFieldRefs {
    readonly id: FieldRef<"PeakSeasonRate", 'Int'>
    readonly roomId: FieldRef<"PeakSeasonRate", 'Int'>
    readonly startDate: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly endDate: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly type: FieldRef<"PeakSeasonRate", 'String'>
    readonly value: FieldRef<"PeakSeasonRate", 'Float'>
    readonly createdAt: FieldRef<"PeakSeasonRate", 'DateTime'>
    readonly updatedAt: FieldRef<"PeakSeasonRate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PeakSeasonRate findUnique
   */
  export type PeakSeasonRateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate findUniqueOrThrow
   */
  export type PeakSeasonRateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate findFirst
   */
  export type PeakSeasonRateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasonRates.
     */
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate findFirstOrThrow
   */
  export type PeakSeasonRateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRate to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PeakSeasonRates.
     */
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate findMany
   */
  export type PeakSeasonRateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter, which PeakSeasonRates to fetch.
     */
    where?: PeakSeasonRateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PeakSeasonRates to fetch.
     */
    orderBy?: PeakSeasonRateOrderByWithRelationInput | PeakSeasonRateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PeakSeasonRates.
     */
    cursor?: PeakSeasonRateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PeakSeasonRates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PeakSeasonRates.
     */
    skip?: number
    distinct?: PeakSeasonRateScalarFieldEnum | PeakSeasonRateScalarFieldEnum[]
  }

  /**
   * PeakSeasonRate create
   */
  export type PeakSeasonRateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The data needed to create a PeakSeasonRate.
     */
    data: XOR<PeakSeasonRateCreateInput, PeakSeasonRateUncheckedCreateInput>
  }

  /**
   * PeakSeasonRate createMany
   */
  export type PeakSeasonRateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PeakSeasonRates.
     */
    data: PeakSeasonRateCreateManyInput | PeakSeasonRateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PeakSeasonRate createManyAndReturn
   */
  export type PeakSeasonRateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * The data used to create many PeakSeasonRates.
     */
    data: PeakSeasonRateCreateManyInput | PeakSeasonRateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeakSeasonRate update
   */
  export type PeakSeasonRateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The data needed to update a PeakSeasonRate.
     */
    data: XOR<PeakSeasonRateUpdateInput, PeakSeasonRateUncheckedUpdateInput>
    /**
     * Choose, which PeakSeasonRate to update.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate updateMany
   */
  export type PeakSeasonRateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PeakSeasonRates.
     */
    data: XOR<PeakSeasonRateUpdateManyMutationInput, PeakSeasonRateUncheckedUpdateManyInput>
    /**
     * Filter which PeakSeasonRates to update
     */
    where?: PeakSeasonRateWhereInput
    /**
     * Limit how many PeakSeasonRates to update.
     */
    limit?: number
  }

  /**
   * PeakSeasonRate updateManyAndReturn
   */
  export type PeakSeasonRateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * The data used to update PeakSeasonRates.
     */
    data: XOR<PeakSeasonRateUpdateManyMutationInput, PeakSeasonRateUncheckedUpdateManyInput>
    /**
     * Filter which PeakSeasonRates to update
     */
    where?: PeakSeasonRateWhereInput
    /**
     * Limit how many PeakSeasonRates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PeakSeasonRate upsert
   */
  export type PeakSeasonRateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * The filter to search for the PeakSeasonRate to update in case it exists.
     */
    where: PeakSeasonRateWhereUniqueInput
    /**
     * In case the PeakSeasonRate found by the `where` argument doesn't exist, create a new PeakSeasonRate with this data.
     */
    create: XOR<PeakSeasonRateCreateInput, PeakSeasonRateUncheckedCreateInput>
    /**
     * In case the PeakSeasonRate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeakSeasonRateUpdateInput, PeakSeasonRateUncheckedUpdateInput>
  }

  /**
   * PeakSeasonRate delete
   */
  export type PeakSeasonRateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
    /**
     * Filter which PeakSeasonRate to delete.
     */
    where: PeakSeasonRateWhereUniqueInput
  }

  /**
   * PeakSeasonRate deleteMany
   */
  export type PeakSeasonRateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PeakSeasonRates to delete
     */
    where?: PeakSeasonRateWhereInput
    /**
     * Limit how many PeakSeasonRates to delete.
     */
    limit?: number
  }

  /**
   * PeakSeasonRate without action
   */
  export type PeakSeasonRateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeakSeasonRate
     */
    select?: PeakSeasonRateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PeakSeasonRate
     */
    omit?: PeakSeasonRateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeakSeasonRateInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    totalPrice: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    totalPrice: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    status: $Enums.ORDER_STATUS | null
    paymentProof: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    status: $Enums.ORDER_STATUS | null
    paymentProof: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    userId: number
    roomId: number
    checkIn: number
    checkOut: number
    totalPrice: number
    status: number
    paymentProof: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    totalPrice?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    totalPrice?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    userId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    status?: true
    paymentProof?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    userId: number
    roomId: number
    checkIn: Date
    checkOut: Date
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof: string | null
    expiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    paymentLogs?: boolean | Order$paymentLogsArgs<ExtArgs>
    reviews?: boolean | Order$reviewsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    userId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    status?: boolean
    paymentProof?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "roomId" | "checkIn" | "checkOut" | "totalPrice" | "status" | "paymentProof" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    paymentLogs?: boolean | Order$paymentLogsArgs<ExtArgs>
    reviews?: boolean | Order$reviewsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      paymentLogs: Prisma.$PaymentLogPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roomId: number
      checkIn: Date
      checkOut: Date
      totalPrice: number
      status: $Enums.ORDER_STATUS
      paymentProof: string | null
      expiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentLogs<T extends Order$paymentLogsArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Order$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Order$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly userId: FieldRef<"Order", 'Int'>
    readonly roomId: FieldRef<"Order", 'Int'>
    readonly checkIn: FieldRef<"Order", 'DateTime'>
    readonly checkOut: FieldRef<"Order", 'DateTime'>
    readonly totalPrice: FieldRef<"Order", 'Float'>
    readonly status: FieldRef<"Order", 'ORDER_STATUS'>
    readonly paymentProof: FieldRef<"Order", 'String'>
    readonly expiresAt: FieldRef<"Order", 'DateTime'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.paymentLogs
   */
  export type Order$paymentLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    where?: PaymentLogWhereInput
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    cursor?: PaymentLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * Order.reviews
   */
  export type Order$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model PaymentLog
   */

  export type AggregatePaymentLog = {
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  export type PaymentLogAvgAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentLogSumAggregateOutputType = {
    id: number | null
    orderId: number | null
  }

  export type PaymentLogMinAggregateOutputType = {
    id: number | null
    orderId: number | null
    status: $Enums.PAYMENT_STATUS | null
    note: string | null
    createdAt: Date | null
  }

  export type PaymentLogMaxAggregateOutputType = {
    id: number | null
    orderId: number | null
    status: $Enums.PAYMENT_STATUS | null
    note: string | null
    createdAt: Date | null
  }

  export type PaymentLogCountAggregateOutputType = {
    id: number
    orderId: number
    status: number
    note: number
    createdAt: number
    _all: number
  }


  export type PaymentLogAvgAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentLogSumAggregateInputType = {
    id?: true
    orderId?: true
  }

  export type PaymentLogMinAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type PaymentLogMaxAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
  }

  export type PaymentLogCountAggregateInputType = {
    id?: true
    orderId?: true
    status?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLog to aggregate.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentLogs
    **/
    _count?: true | PaymentLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentLogMaxAggregateInputType
  }

  export type GetPaymentLogAggregateType<T extends PaymentLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentLog[P]>
      : GetScalarType<T[P], AggregatePaymentLog[P]>
  }




  export type PaymentLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentLogWhereInput
    orderBy?: PaymentLogOrderByWithAggregationInput | PaymentLogOrderByWithAggregationInput[]
    by: PaymentLogScalarFieldEnum[] | PaymentLogScalarFieldEnum
    having?: PaymentLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentLogCountAggregateInputType | true
    _avg?: PaymentLogAvgAggregateInputType
    _sum?: PaymentLogSumAggregateInputType
    _min?: PaymentLogMinAggregateInputType
    _max?: PaymentLogMaxAggregateInputType
  }

  export type PaymentLogGroupByOutputType = {
    id: number
    orderId: number
    status: $Enums.PAYMENT_STATUS
    note: string | null
    createdAt: Date
    _count: PaymentLogCountAggregateOutputType | null
    _avg: PaymentLogAvgAggregateOutputType | null
    _sum: PaymentLogSumAggregateOutputType | null
    _min: PaymentLogMinAggregateOutputType | null
    _max: PaymentLogMaxAggregateOutputType | null
  }

  type GetPaymentLogGroupByPayload<T extends PaymentLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentLogGroupByOutputType[P]>
        }
      >
    >


  export type PaymentLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLog"]>

  export type PaymentLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLog"]>

  export type PaymentLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentLog"]>

  export type PaymentLogSelectScalar = {
    id?: boolean
    orderId?: boolean
    status?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type PaymentLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "status" | "note" | "createdAt", ExtArgs["result"]["paymentLog"]>
  export type PaymentLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentLog"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      orderId: number
      status: $Enums.PAYMENT_STATUS
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentLog"]>
    composites: {}
  }

  type PaymentLogGetPayload<S extends boolean | null | undefined | PaymentLogDefaultArgs> = $Result.GetResult<Prisma.$PaymentLogPayload, S>

  type PaymentLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentLogCountAggregateInputType | true
    }

  export interface PaymentLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentLog'], meta: { name: 'PaymentLog' } }
    /**
     * Find zero or one PaymentLog that matches the filter.
     * @param {PaymentLogFindUniqueArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentLogFindUniqueArgs>(args: SelectSubset<T, PaymentLogFindUniqueArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentLogFindUniqueOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindFirstArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentLogFindFirstArgs>(args?: SelectSubset<T, PaymentLogFindFirstArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindFirstOrThrowArgs} args - Arguments to find a PaymentLog
     * @example
     * // Get one PaymentLog
     * const paymentLog = await prisma.paymentLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany()
     * 
     * // Get first 10 PaymentLogs
     * const paymentLogs = await prisma.paymentLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentLogWithIdOnly = await prisma.paymentLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentLogFindManyArgs>(args?: SelectSubset<T, PaymentLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentLog.
     * @param {PaymentLogCreateArgs} args - Arguments to create a PaymentLog.
     * @example
     * // Create one PaymentLog
     * const PaymentLog = await prisma.paymentLog.create({
     *   data: {
     *     // ... data to create a PaymentLog
     *   }
     * })
     * 
     */
    create<T extends PaymentLogCreateArgs>(args: SelectSubset<T, PaymentLogCreateArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentLogs.
     * @param {PaymentLogCreateManyArgs} args - Arguments to create many PaymentLogs.
     * @example
     * // Create many PaymentLogs
     * const paymentLog = await prisma.paymentLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentLogCreateManyArgs>(args?: SelectSubset<T, PaymentLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentLogs and returns the data saved in the database.
     * @param {PaymentLogCreateManyAndReturnArgs} args - Arguments to create many PaymentLogs.
     * @example
     * // Create many PaymentLogs
     * const paymentLog = await prisma.paymentLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentLogs and only return the `id`
     * const paymentLogWithIdOnly = await prisma.paymentLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentLog.
     * @param {PaymentLogDeleteArgs} args - Arguments to delete one PaymentLog.
     * @example
     * // Delete one PaymentLog
     * const PaymentLog = await prisma.paymentLog.delete({
     *   where: {
     *     // ... filter to delete one PaymentLog
     *   }
     * })
     * 
     */
    delete<T extends PaymentLogDeleteArgs>(args: SelectSubset<T, PaymentLogDeleteArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentLog.
     * @param {PaymentLogUpdateArgs} args - Arguments to update one PaymentLog.
     * @example
     * // Update one PaymentLog
     * const paymentLog = await prisma.paymentLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentLogUpdateArgs>(args: SelectSubset<T, PaymentLogUpdateArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentLogs.
     * @param {PaymentLogDeleteManyArgs} args - Arguments to filter PaymentLogs to delete.
     * @example
     * // Delete a few PaymentLogs
     * const { count } = await prisma.paymentLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentLogDeleteManyArgs>(args?: SelectSubset<T, PaymentLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentLogs
     * const paymentLog = await prisma.paymentLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentLogUpdateManyArgs>(args: SelectSubset<T, PaymentLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentLogs and returns the data updated in the database.
     * @param {PaymentLogUpdateManyAndReturnArgs} args - Arguments to update many PaymentLogs.
     * @example
     * // Update many PaymentLogs
     * const paymentLog = await prisma.paymentLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentLogs and only return the `id`
     * const paymentLogWithIdOnly = await prisma.paymentLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentLog.
     * @param {PaymentLogUpsertArgs} args - Arguments to update or create a PaymentLog.
     * @example
     * // Update or create a PaymentLog
     * const paymentLog = await prisma.paymentLog.upsert({
     *   create: {
     *     // ... data to create a PaymentLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentLog we want to update
     *   }
     * })
     */
    upsert<T extends PaymentLogUpsertArgs>(args: SelectSubset<T, PaymentLogUpsertArgs<ExtArgs>>): Prisma__PaymentLogClient<$Result.GetResult<Prisma.$PaymentLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogCountArgs} args - Arguments to filter PaymentLogs to count.
     * @example
     * // Count the number of PaymentLogs
     * const count = await prisma.paymentLog.count({
     *   where: {
     *     // ... the filter for the PaymentLogs we want to count
     *   }
     * })
    **/
    count<T extends PaymentLogCountArgs>(
      args?: Subset<T, PaymentLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentLogAggregateArgs>(args: Subset<T, PaymentLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentLogAggregateType<T>>

    /**
     * Group by PaymentLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentLogGroupByArgs['orderBy'] }
        : { orderBy?: PaymentLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentLog model
   */
  readonly fields: PaymentLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentLog model
   */
  interface PaymentLogFieldRefs {
    readonly id: FieldRef<"PaymentLog", 'Int'>
    readonly orderId: FieldRef<"PaymentLog", 'Int'>
    readonly status: FieldRef<"PaymentLog", 'PAYMENT_STATUS'>
    readonly note: FieldRef<"PaymentLog", 'String'>
    readonly createdAt: FieldRef<"PaymentLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentLog findUnique
   */
  export type PaymentLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog findUniqueOrThrow
   */
  export type PaymentLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog findFirst
   */
  export type PaymentLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog findFirstOrThrow
   */
  export type PaymentLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLog to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentLogs.
     */
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog findMany
   */
  export type PaymentLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter, which PaymentLogs to fetch.
     */
    where?: PaymentLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentLogs to fetch.
     */
    orderBy?: PaymentLogOrderByWithRelationInput | PaymentLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentLogs.
     */
    cursor?: PaymentLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentLogs.
     */
    skip?: number
    distinct?: PaymentLogScalarFieldEnum | PaymentLogScalarFieldEnum[]
  }

  /**
   * PaymentLog create
   */
  export type PaymentLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentLog.
     */
    data: XOR<PaymentLogCreateInput, PaymentLogUncheckedCreateInput>
  }

  /**
   * PaymentLog createMany
   */
  export type PaymentLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentLogs.
     */
    data: PaymentLogCreateManyInput | PaymentLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentLog createManyAndReturn
   */
  export type PaymentLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentLogs.
     */
    data: PaymentLogCreateManyInput | PaymentLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentLog update
   */
  export type PaymentLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentLog.
     */
    data: XOR<PaymentLogUpdateInput, PaymentLogUncheckedUpdateInput>
    /**
     * Choose, which PaymentLog to update.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog updateMany
   */
  export type PaymentLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentLogs.
     */
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLogs to update
     */
    where?: PaymentLogWhereInput
    /**
     * Limit how many PaymentLogs to update.
     */
    limit?: number
  }

  /**
   * PaymentLog updateManyAndReturn
   */
  export type PaymentLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * The data used to update PaymentLogs.
     */
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyInput>
    /**
     * Filter which PaymentLogs to update
     */
    where?: PaymentLogWhereInput
    /**
     * Limit how many PaymentLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentLog upsert
   */
  export type PaymentLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentLog to update in case it exists.
     */
    where: PaymentLogWhereUniqueInput
    /**
     * In case the PaymentLog found by the `where` argument doesn't exist, create a new PaymentLog with this data.
     */
    create: XOR<PaymentLogCreateInput, PaymentLogUncheckedCreateInput>
    /**
     * In case the PaymentLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentLogUpdateInput, PaymentLogUncheckedUpdateInput>
  }

  /**
   * PaymentLog delete
   */
  export type PaymentLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
    /**
     * Filter which PaymentLog to delete.
     */
    where: PaymentLogWhereUniqueInput
  }

  /**
   * PaymentLog deleteMany
   */
  export type PaymentLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentLogs to delete
     */
    where?: PaymentLogWhereInput
    /**
     * Limit how many PaymentLogs to delete.
     */
    limit?: number
  }

  /**
   * PaymentLog without action
   */
  export type PaymentLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentLog
     */
    select?: PaymentLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentLog
     */
    omit?: PaymentLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentLogInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    orderId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    orderId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    orderId: number | null
    rating: number | null
    comment: string | null
    reply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    orderId: number | null
    rating: number | null
    comment: string | null
    reply: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    orderId: number
    rating: number
    comment: number
    reply: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    orderId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    orderId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    orderId?: true
    rating?: true
    comment?: true
    reply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    orderId?: true
    rating?: true
    comment?: true
    reply?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    orderId?: true
    rating?: true
    comment?: true
    reply?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    orderId: number
    rating: number
    comment: string | null
    reply: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    orderId?: boolean
    rating?: boolean
    comment?: boolean
    reply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    orderId?: boolean
    rating?: boolean
    comment?: boolean
    reply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    orderId?: boolean
    rating?: boolean
    comment?: boolean
    reply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    orderId?: boolean
    rating?: boolean
    comment?: boolean
    reply?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "orderId" | "rating" | "comment" | "reply" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      orderId: number
      rating: number
      comment: string | null
      reply: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly propertyId: FieldRef<"Review", 'Int'>
    readonly orderId: FieldRef<"Review", 'Int'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly reply: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role',
    name: 'name',
    email: 'email',
    password: 'password',
    isVerified: 'isVerified',
    profileImage: 'profileImage',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    phoneNumber: 'phoneNumber'
  };

  export type TenantScalarFieldEnum = (typeof TenantScalarFieldEnum)[keyof typeof TenantScalarFieldEnum]


  export const EmailTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type EmailTokenScalarFieldEnum = (typeof EmailTokenScalarFieldEnum)[keyof typeof EmailTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    used: 'used'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const PropertyCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type PropertyCategoryScalarFieldEnum = (typeof PropertyCategoryScalarFieldEnum)[keyof typeof PropertyCategoryScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    address: 'address',
    image: 'image',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    description: 'description',
    basePrice: 'basePrice',
    capacity: 'capacity',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomAvailabilityScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    date: 'date',
    isAvailable: 'isAvailable'
  };

  export type RoomAvailabilityScalarFieldEnum = (typeof RoomAvailabilityScalarFieldEnum)[keyof typeof RoomAvailabilityScalarFieldEnum]


  export const PeakSeasonRateScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PeakSeasonRateScalarFieldEnum = (typeof PeakSeasonRateScalarFieldEnum)[keyof typeof PeakSeasonRateScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roomId: 'roomId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    totalPrice: 'totalPrice',
    status: 'status',
    paymentProof: 'paymentProof',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PaymentLogScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    status: 'status',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type PaymentLogScalarFieldEnum = (typeof PaymentLogScalarFieldEnum)[keyof typeof PaymentLogScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    orderId: 'orderId',
    rating: 'rating',
    comment: 'comment',
    reply: 'reply',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ORDER_STATUS'
   */
  export type EnumORDER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ORDER_STATUS'>
    


  /**
   * Reference to a field of type 'ORDER_STATUS[]'
   */
  export type ListEnumORDER_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ORDER_STATUS[]'>
    


  /**
   * Reference to a field of type 'PAYMENT_STATUS'
   */
  export type EnumPAYMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_STATUS'>
    


  /**
   * Reference to a field of type 'PAYMENT_STATUS[]'
   */
  export type ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PAYMENT_STATUS[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    profileImage?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    providerAccountId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailTokens?: EmailTokenListRelationFilter
    orders?: OrderListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    reviews?: ReviewListRelationFilter
    tenants?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailTokens?: EmailTokenOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    passwordResetTokens?: PasswordResetTokenOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    tenants?: TenantOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    providerAccountId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: EnumROLEFilter<"User"> | $Enums.ROLE
    name?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    profileImage?: StringNullableFilter<"User"> | string | null
    provider?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailTokens?: EmailTokenListRelationFilter
    orders?: OrderListRelationFilter
    passwordResetTokens?: PasswordResetTokenListRelationFilter
    reviews?: ReviewListRelationFilter
    tenants?: XOR<TenantNullableScalarRelationFilter, TenantWhereInput> | null
  }, "id" | "email" | "providerAccountId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    provider?: SortOrderInput | SortOrder
    providerAccountId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    role?: EnumROLEWithAggregatesFilter<"User"> | $Enums.ROLE
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TenantWhereInput = {
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    id?: IntFilter<"Tenant"> | number
    userId?: IntFilter<"Tenant"> | number
    companyName?: StringFilter<"Tenant"> | string
    phoneNumber?: StringFilter<"Tenant"> | string
    properties?: PropertyListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TenantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TenantWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TenantWhereInput | TenantWhereInput[]
    OR?: TenantWhereInput[]
    NOT?: TenantWhereInput | TenantWhereInput[]
    companyName?: StringFilter<"Tenant"> | string
    phoneNumber?: StringFilter<"Tenant"> | string
    properties?: PropertyListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type TenantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
    _count?: TenantCountOrderByAggregateInput
    _avg?: TenantAvgOrderByAggregateInput
    _max?: TenantMaxOrderByAggregateInput
    _min?: TenantMinOrderByAggregateInput
    _sum?: TenantSumOrderByAggregateInput
  }

  export type TenantScalarWhereWithAggregatesInput = {
    AND?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    OR?: TenantScalarWhereWithAggregatesInput[]
    NOT?: TenantScalarWhereWithAggregatesInput | TenantScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tenant"> | number
    userId?: IntWithAggregatesFilter<"Tenant"> | number
    companyName?: StringWithAggregatesFilter<"Tenant"> | string
    phoneNumber?: StringWithAggregatesFilter<"Tenant"> | string
  }

  export type EmailTokenWhereInput = {
    AND?: EmailTokenWhereInput | EmailTokenWhereInput[]
    OR?: EmailTokenWhereInput[]
    NOT?: EmailTokenWhereInput | EmailTokenWhereInput[]
    id?: IntFilter<"EmailToken"> | number
    userId?: IntFilter<"EmailToken"> | number
    token?: StringFilter<"EmailToken"> | string
    expiresAt?: DateTimeNullableFilter<"EmailToken"> | Date | string | null
    used?: BoolFilter<"EmailToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: EmailTokenWhereInput | EmailTokenWhereInput[]
    OR?: EmailTokenWhereInput[]
    NOT?: EmailTokenWhereInput | EmailTokenWhereInput[]
    userId?: IntFilter<"EmailToken"> | number
    expiresAt?: DateTimeNullableFilter<"EmailToken"> | Date | string | null
    used?: BoolFilter<"EmailToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type EmailTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    used?: SortOrder
    _count?: EmailTokenCountOrderByAggregateInput
    _avg?: EmailTokenAvgOrderByAggregateInput
    _max?: EmailTokenMaxOrderByAggregateInput
    _min?: EmailTokenMinOrderByAggregateInput
    _sum?: EmailTokenSumOrderByAggregateInput
  }

  export type EmailTokenScalarWhereWithAggregatesInput = {
    AND?: EmailTokenScalarWhereWithAggregatesInput | EmailTokenScalarWhereWithAggregatesInput[]
    OR?: EmailTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailTokenScalarWhereWithAggregatesInput | EmailTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmailToken"> | number
    userId?: IntWithAggregatesFilter<"EmailToken"> | number
    token?: StringWithAggregatesFilter<"EmailToken"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"EmailToken"> | Date | string | null
    used?: BoolWithAggregatesFilter<"EmailToken"> | boolean
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    used?: BoolFilter<"PasswordResetToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: IntFilter<"PasswordResetToken"> | number
    expiresAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    used?: BoolFilter<"PasswordResetToken"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    used?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _avg?: PasswordResetTokenAvgOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
    _sum?: PasswordResetTokenSumOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    userId?: IntWithAggregatesFilter<"PasswordResetToken"> | number
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"PasswordResetToken"> | Date | string | null
    used?: BoolWithAggregatesFilter<"PasswordResetToken"> | boolean
  }

  export type PropertyCategoryWhereInput = {
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    id?: IntFilter<"PropertyCategory"> | number
    name?: StringFilter<"PropertyCategory"> | string
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
  }

  export type PropertyCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
  }

  export type PropertyCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    name?: StringFilter<"PropertyCategory"> | string
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
  }, "id">

  export type PropertyCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyCategoryCountOrderByAggregateInput
    _avg?: PropertyCategoryAvgOrderByAggregateInput
    _max?: PropertyCategoryMaxOrderByAggregateInput
    _min?: PropertyCategoryMinOrderByAggregateInput
    _sum?: PropertyCategorySumOrderByAggregateInput
  }

  export type PropertyCategoryScalarWhereWithAggregatesInput = {
    AND?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    OR?: PropertyCategoryScalarWhereWithAggregatesInput[]
    NOT?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyCategory"> | number
    name?: StringWithAggregatesFilter<"PropertyCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyCategory"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    latitude?: FloatFilter<"Property"> | number
    longitude?: FloatFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    category?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    reviews?: ReviewListRelationFilter
    rooms?: RoomListRelationFilter
    images?: PropertyImageListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: PropertyCategoryOrderByWithRelationInput
    tenant?: TenantOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    rooms?: RoomOrderByRelationAggregateInput
    images?: PropertyImageOrderByRelationAggregateInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    latitude?: FloatFilter<"Property"> | number
    longitude?: FloatFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    category?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
    tenant?: XOR<TenantScalarRelationFilter, TenantWhereInput>
    reviews?: ReviewListRelationFilter
    rooms?: RoomListRelationFilter
    images?: PropertyImageListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    tenantId?: IntWithAggregatesFilter<"Property"> | number
    categoryId?: IntWithAggregatesFilter<"Property"> | number
    name?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    address?: StringWithAggregatesFilter<"Property"> | string
    image?: StringWithAggregatesFilter<"Property"> | string
    latitude?: FloatWithAggregatesFilter<"Property"> | number
    longitude?: FloatWithAggregatesFilter<"Property"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    property?: PropertyOrderByWithRelationInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    basePrice?: FloatFilter<"Room"> | number
    capacity?: IntFilter<"Room"> | number
    startDate?: DateTimeFilter<"Room"> | Date | string
    endDate?: DateTimeFilter<"Room"> | Date | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    orders?: OrderListRelationFilter
    peakRates?: PeakSeasonRateListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    peakRates?: PeakSeasonRateOrderByRelationAggregateInput
    availabilities?: RoomAvailabilityOrderByRelationAggregateInput
    property?: PropertyOrderByWithRelationInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    basePrice?: FloatFilter<"Room"> | number
    capacity?: IntFilter<"Room"> | number
    startDate?: DateTimeFilter<"Room"> | Date | string
    endDate?: DateTimeFilter<"Room"> | Date | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    orders?: OrderListRelationFilter
    peakRates?: PeakSeasonRateListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    propertyId?: IntWithAggregatesFilter<"Room"> | number
    name?: StringWithAggregatesFilter<"Room"> | string
    description?: StringWithAggregatesFilter<"Room"> | string
    basePrice?: FloatWithAggregatesFilter<"Room"> | number
    capacity?: IntWithAggregatesFilter<"Room"> | number
    startDate?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomAvailabilityWhereInput = {
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type RoomAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    _count?: RoomAvailabilityCountOrderByAggregateInput
    _avg?: RoomAvailabilityAvgOrderByAggregateInput
    _max?: RoomAvailabilityMaxOrderByAggregateInput
    _min?: RoomAvailabilityMinOrderByAggregateInput
    _sum?: RoomAvailabilitySumOrderByAggregateInput
  }

  export type RoomAvailabilityScalarWhereWithAggregatesInput = {
    AND?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    OR?: RoomAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomAvailability"> | number
    roomId?: IntWithAggregatesFilter<"RoomAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"RoomAvailability"> | boolean
  }

  export type PeakSeasonRateWhereInput = {
    AND?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    OR?: PeakSeasonRateWhereInput[]
    NOT?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    id?: IntFilter<"PeakSeasonRate"> | number
    roomId?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    type?: StringFilter<"PeakSeasonRate"> | string
    value?: FloatFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type PeakSeasonRateOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
  }

  export type PeakSeasonRateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomId_startDate?: PeakSeasonRateRoomIdStartDateCompoundUniqueInput
    AND?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    OR?: PeakSeasonRateWhereInput[]
    NOT?: PeakSeasonRateWhereInput | PeakSeasonRateWhereInput[]
    roomId?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    type?: StringFilter<"PeakSeasonRate"> | string
    value?: FloatFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId_startDate">

  export type PeakSeasonRateOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PeakSeasonRateCountOrderByAggregateInput
    _avg?: PeakSeasonRateAvgOrderByAggregateInput
    _max?: PeakSeasonRateMaxOrderByAggregateInput
    _min?: PeakSeasonRateMinOrderByAggregateInput
    _sum?: PeakSeasonRateSumOrderByAggregateInput
  }

  export type PeakSeasonRateScalarWhereWithAggregatesInput = {
    AND?: PeakSeasonRateScalarWhereWithAggregatesInput | PeakSeasonRateScalarWhereWithAggregatesInput[]
    OR?: PeakSeasonRateScalarWhereWithAggregatesInput[]
    NOT?: PeakSeasonRateScalarWhereWithAggregatesInput | PeakSeasonRateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PeakSeasonRate"> | number
    roomId?: IntWithAggregatesFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    type?: StringWithAggregatesFilter<"PeakSeasonRate"> | string
    value?: FloatWithAggregatesFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PeakSeasonRate"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    roomId?: IntFilter<"Order"> | number
    checkIn?: DateTimeFilter<"Order"> | Date | string
    checkOut?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    paymentProof?: StringNullableFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    paymentLogs?: PaymentLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    paymentLogs?: PaymentLogOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    userId?: IntFilter<"Order"> | number
    roomId?: IntFilter<"Order"> | number
    checkIn?: DateTimeFilter<"Order"> | Date | string
    checkOut?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    paymentProof?: StringNullableFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    paymentLogs?: PaymentLogListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentProof?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    userId?: IntWithAggregatesFilter<"Order"> | number
    roomId?: IntWithAggregatesFilter<"Order"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Order"> | number
    status?: EnumORDER_STATUSWithAggregatesFilter<"Order"> | $Enums.ORDER_STATUS
    paymentProof?: StringNullableWithAggregatesFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type PaymentLogWhereInput = {
    AND?: PaymentLogWhereInput | PaymentLogWhereInput[]
    OR?: PaymentLogWhereInput[]
    NOT?: PaymentLogWhereInput | PaymentLogWhereInput[]
    id?: IntFilter<"PaymentLog"> | number
    orderId?: IntFilter<"PaymentLog"> | number
    status?: EnumPAYMENT_STATUSFilter<"PaymentLog"> | $Enums.PAYMENT_STATUS
    note?: StringNullableFilter<"PaymentLog"> | string | null
    createdAt?: DateTimeFilter<"PaymentLog"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentLogOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentLogWhereInput | PaymentLogWhereInput[]
    OR?: PaymentLogWhereInput[]
    NOT?: PaymentLogWhereInput | PaymentLogWhereInput[]
    orderId?: IntFilter<"PaymentLog"> | number
    status?: EnumPAYMENT_STATUSFilter<"PaymentLog"> | $Enums.PAYMENT_STATUS
    note?: StringNullableFilter<"PaymentLog"> | string | null
    createdAt?: DateTimeFilter<"PaymentLog"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id">

  export type PaymentLogOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentLogCountOrderByAggregateInput
    _avg?: PaymentLogAvgOrderByAggregateInput
    _max?: PaymentLogMaxOrderByAggregateInput
    _min?: PaymentLogMinOrderByAggregateInput
    _sum?: PaymentLogSumOrderByAggregateInput
  }

  export type PaymentLogScalarWhereWithAggregatesInput = {
    AND?: PaymentLogScalarWhereWithAggregatesInput | PaymentLogScalarWhereWithAggregatesInput[]
    OR?: PaymentLogScalarWhereWithAggregatesInput[]
    NOT?: PaymentLogScalarWhereWithAggregatesInput | PaymentLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentLog"> | number
    orderId?: IntWithAggregatesFilter<"PaymentLog"> | number
    status?: EnumPAYMENT_STATUSWithAggregatesFilter<"PaymentLog"> | $Enums.PAYMENT_STATUS
    note?: StringNullableWithAggregatesFilter<"PaymentLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentLog"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    orderId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    reply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    reply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    orderId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    reply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    reply?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    propertyId?: IntWithAggregatesFilter<"Review"> | number
    orderId?: IntWithAggregatesFilter<"Review"> | number
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    reply?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantCreateInput = {
    companyName: string
    phoneNumber: string
    properties?: PropertyCreateNestedManyWithoutTenantInput
    user: UserCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateInput = {
    id?: number
    userId: number
    companyName: string
    phoneNumber: string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantUpdateInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutTenantNestedInput
    user?: UserUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantCreateManyInput = {
    id?: number
    userId: number
    companyName: string
    phoneNumber: string
  }

  export type TenantUpdateManyMutationInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type TenantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type EmailTokenCreateInput = {
    token: string
    expiresAt?: Date | string | null
    used?: boolean
    user: UserCreateNestedOneWithoutEmailTokensInput
  }

  export type EmailTokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type EmailTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutEmailTokensNestedInput
  }

  export type EmailTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailTokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type EmailTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenCreateInput = {
    token: string
    expiresAt?: Date | string | null
    used?: boolean
    user: UserCreateNestedOneWithoutPasswordResetTokensInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type PasswordResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: number
    userId: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PropertyCategoryCreateInput = {
    name: string
    createdAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type PropertyCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    url: string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    propertyId: number
    url: string
  }

  export type PropertyImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    propertyId: number
    url: string
  }

  export type PropertyImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type RoomCreateInput = {
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityCreateInput = {
    date: Date | string
    isAvailable?: boolean
    room: RoomCreateNestedOneWithoutAvailabilitiesInput
  }

  export type RoomAvailabilityUncheckedCreateInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
  }

  export type RoomAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type RoomAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityCreateManyInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
  }

  export type RoomAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PeakSeasonRateCreateInput = {
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutPeakRatesInput
  }

  export type PeakSeasonRateUncheckedCreateInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPeakRatesNestedInput
  }

  export type PeakSeasonRateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateCreateManyInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutOrderInput
    reviews?: ReviewCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutOrderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogCreateInput = {
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentLogsInput
  }

  export type PaymentLogUncheckedCreateInput = {
    id?: number
    orderId: number
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentLogUpdateInput = {
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentLogsNestedInput
  }

  export type PaymentLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogCreateManyInput = {
    id?: number
    orderId: number
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentLogUpdateManyMutationInput = {
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutReviewsInput
    property: PropertyCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EmailTokenListRelationFilter = {
    every?: EmailTokenWhereInput
    some?: EmailTokenWhereInput
    none?: EmailTokenWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TenantNullableScalarRelationFilter = {
    is?: TenantWhereInput | null
    isNot?: TenantWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmailTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    profileImage?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    profileImage?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isVerified?: SortOrder
    profileImage?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TenantAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TenantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TenantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    phoneNumber?: SortOrder
  }

  export type TenantSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EmailTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EmailTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type EmailTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    used?: SortOrder
  }

  export type PasswordResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PropertyCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PropertyCategoryScalarRelationFilter = {
    is?: PropertyCategoryWhereInput
    isNot?: PropertyCategoryWhereInput
  }

  export type TenantScalarRelationFilter = {
    is?: TenantWhereInput
    isNot?: TenantWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    image?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PeakSeasonRateListRelationFilter = {
    every?: PeakSeasonRateWhereInput
    some?: PeakSeasonRateWhereInput
    none?: PeakSeasonRateWhereInput
  }

  export type RoomAvailabilityListRelationFilter = {
    every?: RoomAvailabilityWhereInput
    some?: RoomAvailabilityWhereInput
    none?: RoomAvailabilityWhereInput
  }

  export type PeakSeasonRateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    basePrice?: SortOrder
    capacity?: SortOrder
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
  }

  export type RoomAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
  }

  export type RoomAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
  }

  export type RoomAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type PeakSeasonRateRoomIdStartDateCompoundUniqueInput = {
    roomId: number
    startDate: Date | string
  }

  export type PeakSeasonRateCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
  }

  export type PeakSeasonRateMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PeakSeasonRateSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
  }

  export type EnumORDER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSFilter<$PrismaModel> | $Enums.ORDER_STATUS
  }

  export type PaymentLogListRelationFilter = {
    every?: PaymentLogWhereInput
    some?: PaymentLogWhereInput
    none?: PaymentLogWhereInput
  }

  export type PaymentLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    totalPrice?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    status?: SortOrder
    paymentProof?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roomId?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumORDER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.ORDER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumORDER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumORDER_STATUSFilter<$PrismaModel>
  }

  export type EnumPAYMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PaymentLogCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLogAvgOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentLogMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLogMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentLogSumOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
  }

  export type EnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    reply?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    orderId?: SortOrder
    rating?: SortOrder
  }

  export type EmailTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput> | EmailTokenCreateWithoutUserInput[] | EmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailTokenCreateOrConnectWithoutUserInput | EmailTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailTokenCreateManyUserInputEnvelope
    connect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TenantCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type EmailTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput> | EmailTokenCreateWithoutUserInput[] | EmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailTokenCreateOrConnectWithoutUserInput | EmailTokenCreateOrConnectWithoutUserInput[]
    createMany?: EmailTokenCreateManyUserInputEnvelope
    connect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TenantUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    connect?: TenantWhereUniqueInput
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EmailTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput> | EmailTokenCreateWithoutUserInput[] | EmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailTokenCreateOrConnectWithoutUserInput | EmailTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailTokenUpsertWithWhereUniqueWithoutUserInput | EmailTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailTokenCreateManyUserInputEnvelope
    set?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    disconnect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    delete?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    connect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    update?: EmailTokenUpdateWithWhereUniqueWithoutUserInput | EmailTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailTokenUpdateManyWithWhereWithoutUserInput | EmailTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailTokenScalarWhereInput | EmailTokenScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TenantUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmailTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput> | EmailTokenCreateWithoutUserInput[] | EmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EmailTokenCreateOrConnectWithoutUserInput | EmailTokenCreateOrConnectWithoutUserInput[]
    upsert?: EmailTokenUpsertWithWhereUniqueWithoutUserInput | EmailTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EmailTokenCreateManyUserInputEnvelope
    set?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    disconnect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    delete?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    connect?: EmailTokenWhereUniqueInput | EmailTokenWhereUniqueInput[]
    update?: EmailTokenUpdateWithWhereUniqueWithoutUserInput | EmailTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EmailTokenUpdateManyWithWhereWithoutUserInput | EmailTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EmailTokenScalarWhereInput | EmailTokenScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TenantUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantCreateOrConnectWithoutUserInput
    upsert?: TenantUpsertWithoutUserInput
    disconnect?: TenantWhereInput | boolean
    delete?: TenantWhereInput | boolean
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutUserInput, TenantUpdateWithoutUserInput>, TenantUncheckedUpdateWithoutUserInput>
  }

  export type PropertyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTenantsInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutTenantsNestedInput = {
    create?: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantsInput
    upsert?: UserUpsertWithoutTenantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantsInput, UserUpdateWithoutTenantsInput>, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type PropertyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEmailTokensInput = {
    create?: XOR<UserCreateWithoutEmailTokensInput, UserUncheckedCreateWithoutEmailTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutEmailTokensNestedInput = {
    create?: XOR<UserCreateWithoutEmailTokensInput, UserUncheckedCreateWithoutEmailTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailTokensInput
    upsert?: UserUpsertWithoutEmailTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailTokensInput, UserUpdateWithoutEmailTokensInput>, UserUncheckedUpdateWithoutEmailTokensInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokensInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokensNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokensInput
    upsert?: UserUpsertWithoutPasswordResetTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokensInput, UserUpdateWithoutPasswordResetTokensInput>, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type PropertyCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyCategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
  }

  export type TenantCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput
    connect?: TenantWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RoomCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyCategoryUpsertWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
    update?: XOR<XOR<PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput, PropertyCategoryUpdateWithoutPropertiesInput>, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantCreateOrConnectWithoutPropertiesInput
    upsert?: TenantUpsertWithoutPropertiesInput
    connect?: TenantWhereUniqueInput
    update?: XOR<XOR<TenantUpdateToOneWithWhereWithoutPropertiesInput, TenantUpdateWithoutPropertiesInput>, TenantUncheckedUpdateWithoutPropertiesInput>
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RoomUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type OrderCreateNestedManyWithoutRoomInput = {
    create?: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput> | OrderCreateWithoutRoomInput[] | OrderUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRoomInput | OrderCreateOrConnectWithoutRoomInput[]
    createMany?: OrderCreateManyRoomInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PeakSeasonRateCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
  }

  export type RoomAvailabilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type PropertyCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput> | OrderCreateWithoutRoomInput[] | OrderUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRoomInput | OrderCreateOrConnectWithoutRoomInput[]
    createMany?: OrderCreateManyRoomInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
  }

  export type RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutRoomNestedInput = {
    create?: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput> | OrderCreateWithoutRoomInput[] | OrderUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRoomInput | OrderCreateOrConnectWithoutRoomInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRoomInput | OrderUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: OrderCreateManyRoomInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRoomInput | OrderUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRoomInput | OrderUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PeakSeasonRateUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    set?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    disconnect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    delete?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    update?: PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonRateUpdateManyWithWhereWithoutRoomInput | PeakSeasonRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
  }

  export type RoomAvailabilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type PropertyUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    upsert?: PropertyUpsertWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomsInput, PropertyUpdateWithoutRoomsInput>, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type OrderUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput> | OrderCreateWithoutRoomInput[] | OrderUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutRoomInput | OrderCreateOrConnectWithoutRoomInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutRoomInput | OrderUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: OrderCreateManyRoomInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutRoomInput | OrderUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutRoomInput | OrderUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput> | PeakSeasonRateCreateWithoutRoomInput[] | PeakSeasonRateUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: PeakSeasonRateCreateOrConnectWithoutRoomInput | PeakSeasonRateCreateOrConnectWithoutRoomInput[]
    upsert?: PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: PeakSeasonRateCreateManyRoomInputEnvelope
    set?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    disconnect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    delete?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    connect?: PeakSeasonRateWhereUniqueInput | PeakSeasonRateWhereUniqueInput[]
    update?: PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput | PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: PeakSeasonRateUpdateManyWithWhereWithoutRoomInput | PeakSeasonRateUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    upsert?: RoomUpsertWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAvailabilitiesInput, RoomUpdateWithoutAvailabilitiesInput>, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RoomCreateNestedOneWithoutPeakRatesInput = {
    create?: XOR<RoomCreateWithoutPeakRatesInput, RoomUncheckedCreateWithoutPeakRatesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPeakRatesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutPeakRatesNestedInput = {
    create?: XOR<RoomCreateWithoutPeakRatesInput, RoomUncheckedCreateWithoutPeakRatesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPeakRatesInput
    upsert?: RoomUpsertWithoutPeakRatesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPeakRatesInput, RoomUpdateWithoutPeakRatesInput>, RoomUncheckedUpdateWithoutPeakRatesInput>
  }

  export type RoomCreateNestedOneWithoutOrdersInput = {
    create?: XOR<RoomCreateWithoutOrdersInput, RoomUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOrdersInput
    connect?: RoomWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentLogCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput> | PaymentLogCreateWithoutOrderInput[] | PaymentLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutOrderInput | PaymentLogCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentLogCreateManyOrderInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput> | ReviewCreateWithoutOrderInput[] | ReviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput | ReviewCreateOrConnectWithoutOrderInput[]
    createMany?: ReviewCreateManyOrderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PaymentLogUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput> | PaymentLogCreateWithoutOrderInput[] | PaymentLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutOrderInput | PaymentLogCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentLogCreateManyOrderInputEnvelope
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput> | ReviewCreateWithoutOrderInput[] | ReviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput | ReviewCreateOrConnectWithoutOrderInput[]
    createMany?: ReviewCreateManyOrderInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumORDER_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.ORDER_STATUS
  }

  export type RoomUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<RoomCreateWithoutOrdersInput, RoomUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: RoomCreateOrConnectWithoutOrdersInput
    upsert?: RoomUpsertWithoutOrdersInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutOrdersInput, RoomUpdateWithoutOrdersInput>, RoomUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type PaymentLogUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput> | PaymentLogCreateWithoutOrderInput[] | PaymentLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutOrderInput | PaymentLogCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutOrderInput | PaymentLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentLogCreateManyOrderInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutOrderInput | PaymentLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutOrderInput | PaymentLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput> | ReviewCreateWithoutOrderInput[] | ReviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput | ReviewCreateOrConnectWithoutOrderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOrderInput | ReviewUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ReviewCreateManyOrderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOrderInput | ReviewUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOrderInput | ReviewUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PaymentLogUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput> | PaymentLogCreateWithoutOrderInput[] | PaymentLogUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentLogCreateOrConnectWithoutOrderInput | PaymentLogCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentLogUpsertWithWhereUniqueWithoutOrderInput | PaymentLogUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentLogCreateManyOrderInputEnvelope
    set?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    disconnect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    delete?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    connect?: PaymentLogWhereUniqueInput | PaymentLogWhereUniqueInput[]
    update?: PaymentLogUpdateWithWhereUniqueWithoutOrderInput | PaymentLogUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentLogUpdateManyWithWhereWithoutOrderInput | PaymentLogUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput> | ReviewCreateWithoutOrderInput[] | ReviewUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutOrderInput | ReviewCreateOrConnectWithoutOrderInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutOrderInput | ReviewUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: ReviewCreateManyOrderInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutOrderInput | ReviewUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutOrderInput | ReviewUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutPaymentLogsInput = {
    create?: XOR<OrderCreateWithoutPaymentLogsInput, OrderUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentLogsInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPAYMENT_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.PAYMENT_STATUS
  }

  export type OrderUpdateOneRequiredWithoutPaymentLogsNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentLogsInput, OrderUncheckedCreateWithoutPaymentLogsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentLogsInput
    upsert?: OrderUpsertWithoutPaymentLogsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentLogsInput, OrderUpdateWithoutPaymentLogsInput>, OrderUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type OrderCreateNestedOneWithoutReviewsInput = {
    create?: XOR<OrderCreateWithoutReviewsInput, OrderUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewsInput
    connect?: OrderWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<OrderCreateWithoutReviewsInput, OrderUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutReviewsInput
    upsert?: OrderUpsertWithoutReviewsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutReviewsInput, OrderUpdateWithoutReviewsInput>, OrderUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    upsert?: PropertyUpsertWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutReviewsInput, PropertyUpdateWithoutReviewsInput>, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumORDER_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSFilter<$PrismaModel> | $Enums.ORDER_STATUS
  }

  export type NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ORDER_STATUS | EnumORDER_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.ORDER_STATUS[] | ListEnumORDER_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumORDER_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.ORDER_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumORDER_STATUSFilter<$PrismaModel>
    _max?: NestedEnumORDER_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumPAYMENT_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
  }

  export type NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PAYMENT_STATUS | EnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.PAYMENT_STATUS[] | ListEnumPAYMENT_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.PAYMENT_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
    _max?: NestedEnumPAYMENT_STATUSFilter<$PrismaModel>
  }

  export type EmailTokenCreateWithoutUserInput = {
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type EmailTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type EmailTokenCreateOrConnectWithoutUserInput = {
    where: EmailTokenWhereUniqueInput
    create: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailTokenCreateManyUserInputEnvelope = {
    data: EmailTokenCreateManyUserInput | EmailTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutOrdersInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutOrderInput
    reviews?: ReviewCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutOrderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutReviewsInput
    property: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantCreateWithoutUserInput = {
    companyName: string
    phoneNumber: string
    properties?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantUncheckedCreateWithoutUserInput = {
    id?: number
    companyName: string
    phoneNumber: string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantCreateOrConnectWithoutUserInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
  }

  export type EmailTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: EmailTokenWhereUniqueInput
    update: XOR<EmailTokenUpdateWithoutUserInput, EmailTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailTokenCreateWithoutUserInput, EmailTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: EmailTokenWhereUniqueInput
    data: XOR<EmailTokenUpdateWithoutUserInput, EmailTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailTokenUpdateManyWithWhereWithoutUserInput = {
    where: EmailTokenScalarWhereInput
    data: XOR<EmailTokenUpdateManyMutationInput, EmailTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type EmailTokenScalarWhereInput = {
    AND?: EmailTokenScalarWhereInput | EmailTokenScalarWhereInput[]
    OR?: EmailTokenScalarWhereInput[]
    NOT?: EmailTokenScalarWhereInput | EmailTokenScalarWhereInput[]
    id?: IntFilter<"EmailToken"> | number
    userId?: IntFilter<"EmailToken"> | number
    token?: StringFilter<"EmailToken"> | string
    expiresAt?: DateTimeNullableFilter<"EmailToken"> | Date | string | null
    used?: BoolFilter<"EmailToken"> | boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    userId?: IntFilter<"Order"> | number
    roomId?: IntFilter<"Order"> | number
    checkIn?: DateTimeFilter<"Order"> | Date | string
    checkOut?: DateTimeFilter<"Order"> | Date | string
    totalPrice?: FloatFilter<"Order"> | number
    status?: EnumORDER_STATUSFilter<"Order"> | $Enums.ORDER_STATUS
    paymentProof?: StringNullableFilter<"Order"> | string | null
    expiresAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: IntFilter<"PasswordResetToken"> | number
    userId?: IntFilter<"PasswordResetToken"> | number
    token?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeNullableFilter<"PasswordResetToken"> | Date | string | null
    used?: BoolFilter<"PasswordResetToken"> | boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    orderId?: IntFilter<"Review"> | number
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    reply?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TenantUpsertWithoutUserInput = {
    update: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
    create: XOR<TenantCreateWithoutUserInput, TenantUncheckedCreateWithoutUserInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutUserInput, TenantUncheckedUpdateWithoutUserInput>
  }

  export type TenantUpdateWithoutUserInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type PropertyCreateWithoutTenantInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateManyTenantInputEnvelope = {
    data: PropertyCreateManyTenantInput | PropertyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTenantsInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantsInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    image?: StringFilter<"Property"> | string
    latitude?: FloatFilter<"Property"> | number
    longitude?: FloatFilter<"Property"> | number
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type UserUpsertWithoutTenantsInput = {
    update: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
    create: XOR<UserCreateWithoutTenantsInput, UserUncheckedCreateWithoutTenantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantsInput, UserUncheckedUpdateWithoutTenantsInput>
  }

  export type UserUpdateWithoutTenantsInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailTokensInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailTokensInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailTokensInput, UserUncheckedCreateWithoutEmailTokensInput>
  }

  export type UserUpsertWithoutEmailTokensInput = {
    update: XOR<UserUpdateWithoutEmailTokensInput, UserUncheckedUpdateWithoutEmailTokensInput>
    create: XOR<UserCreateWithoutEmailTokensInput, UserUncheckedCreateWithoutEmailTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailTokensInput, UserUncheckedUpdateWithoutEmailTokensInput>
  }

  export type UserUpdateWithoutEmailTokensInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokensInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokensInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
  }

  export type UserUpsertWithoutPasswordResetTokensInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
    create: XOR<UserCreateWithoutPasswordResetTokensInput, UserUncheckedCreateWithoutPasswordResetTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokensInput, UserUncheckedUpdateWithoutPasswordResetTokensInput>
  }

  export type UserUpdateWithoutPasswordResetTokensInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PropertyCreateWithoutCategoryInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyCreateManyCategoryInputEnvelope = {
    data: PropertyCreateManyCategoryInput | PropertyCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PropertyCategoryCreateWithoutPropertiesInput = {
    name: string
    createdAt?: Date | string
  }

  export type PropertyCategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type PropertyCategoryCreateOrConnectWithoutPropertiesInput = {
    where: PropertyCategoryWhereUniqueInput
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type TenantCreateWithoutPropertiesInput = {
    companyName: string
    phoneNumber: string
    user: UserCreateNestedOneWithoutTenantsInput
  }

  export type TenantUncheckedCreateWithoutPropertiesInput = {
    id?: number
    userId: number
    companyName: string
    phoneNumber: string
  }

  export type TenantCreateOrConnectWithoutPropertiesInput = {
    where: TenantWhereUniqueInput
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
  }

  export type ReviewCreateWithoutPropertyInput = {
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type RoomCreateWithoutPropertyInput = {
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomCreateManyPropertyInputEnvelope = {
    data: RoomCreateManyPropertyInput | RoomCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    url: string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    url: string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCategoryUpsertWithoutPropertiesInput = {
    update: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    where?: PropertyCategoryWhereInput
  }

  export type PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyCategoryWhereInput
    data: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoryUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantUpsertWithoutPropertiesInput = {
    update: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
    create: XOR<TenantCreateWithoutPropertiesInput, TenantUncheckedCreateWithoutPropertiesInput>
    where?: TenantWhereInput
  }

  export type TenantUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: TenantWhereInput
    data: XOR<TenantUpdateWithoutPropertiesInput, TenantUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantUpdateWithoutPropertiesInput = {
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTenantsNestedInput
  }

  export type TenantUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    companyName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringFilter<"Room"> | string
    basePrice?: FloatFilter<"Room"> | number
    capacity?: IntFilter<"Room"> | number
    startDate?: DateTimeFilter<"Room"> | Date | string
    endDate?: DateTimeFilter<"Room"> | Date | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
  }

  export type PropertyCreateWithoutImagesInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type OrderCreateWithoutRoomInput = {
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrdersInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutOrderInput
    reviews?: ReviewCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutOrderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRoomInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput>
  }

  export type OrderCreateManyRoomInputEnvelope = {
    data: OrderCreateManyRoomInput | OrderCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PeakSeasonRateCreateWithoutRoomInput = {
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateUncheckedCreateWithoutRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateCreateOrConnectWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    create: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonRateCreateManyRoomInputEnvelope = {
    data: PeakSeasonRateCreateManyRoomInput | PeakSeasonRateCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomAvailabilityCreateWithoutRoomInput = {
    date: Date | string
    isAvailable?: boolean
  }

  export type RoomAvailabilityUncheckedCreateWithoutRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
  }

  export type RoomAvailabilityCreateOrConnectWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityCreateManyRoomInputEnvelope = {
    data: RoomAvailabilityCreateManyRoomInput | RoomAvailabilityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertyCreateWithoutRoomsInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutRoomsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutRoomInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutRoomInput, OrderUncheckedUpdateWithoutRoomInput>
    create: XOR<OrderCreateWithoutRoomInput, OrderUncheckedCreateWithoutRoomInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutRoomInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutRoomInput, OrderUncheckedUpdateWithoutRoomInput>
  }

  export type OrderUpdateManyWithWhereWithoutRoomInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutRoomInput>
  }

  export type PeakSeasonRateUpsertWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    update: XOR<PeakSeasonRateUpdateWithoutRoomInput, PeakSeasonRateUncheckedUpdateWithoutRoomInput>
    create: XOR<PeakSeasonRateCreateWithoutRoomInput, PeakSeasonRateUncheckedCreateWithoutRoomInput>
  }

  export type PeakSeasonRateUpdateWithWhereUniqueWithoutRoomInput = {
    where: PeakSeasonRateWhereUniqueInput
    data: XOR<PeakSeasonRateUpdateWithoutRoomInput, PeakSeasonRateUncheckedUpdateWithoutRoomInput>
  }

  export type PeakSeasonRateUpdateManyWithWhereWithoutRoomInput = {
    where: PeakSeasonRateScalarWhereInput
    data: XOR<PeakSeasonRateUpdateManyMutationInput, PeakSeasonRateUncheckedUpdateManyWithoutRoomInput>
  }

  export type PeakSeasonRateScalarWhereInput = {
    AND?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
    OR?: PeakSeasonRateScalarWhereInput[]
    NOT?: PeakSeasonRateScalarWhereInput | PeakSeasonRateScalarWhereInput[]
    id?: IntFilter<"PeakSeasonRate"> | number
    roomId?: IntFilter<"PeakSeasonRate"> | number
    startDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    endDate?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    type?: StringFilter<"PeakSeasonRate"> | string
    value?: FloatFilter<"PeakSeasonRate"> | number
    createdAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
    updatedAt?: DateTimeFilter<"PeakSeasonRate"> | Date | string
  }

  export type RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    update: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    data: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomAvailabilityScalarWhereInput
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAvailabilityScalarWhereInput = {
    AND?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    OR?: RoomAvailabilityScalarWhereInput[]
    NOT?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
  }

  export type PropertyUpsertWithoutRoomsInput = {
    update: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type PropertyUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomCreateWithoutAvailabilitiesInput = {
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRoomInput
    peakRates?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAvailabilitiesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type RoomUpsertWithoutAvailabilitiesInput = {
    update: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RoomUpdateWithoutAvailabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutPeakRatesInput = {
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutPeakRatesInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPeakRatesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPeakRatesInput, RoomUncheckedCreateWithoutPeakRatesInput>
  }

  export type RoomUpsertWithoutPeakRatesInput = {
    update: XOR<RoomUpdateWithoutPeakRatesInput, RoomUncheckedUpdateWithoutPeakRatesInput>
    create: XOR<RoomCreateWithoutPeakRatesInput, RoomUncheckedCreateWithoutPeakRatesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPeakRatesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPeakRatesInput, RoomUncheckedUpdateWithoutPeakRatesInput>
  }

  export type RoomUpdateWithoutPeakRatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutPeakRatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutOrdersInput = {
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    peakRates?: PeakSeasonRateCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    property: PropertyCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutOrdersInput = {
    id?: number
    propertyId: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    peakRates?: PeakSeasonRateUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutOrdersInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutOrdersInput, RoomUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type PaymentLogCreateWithoutOrderInput = {
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentLogUncheckedCreateWithoutOrderInput = {
    id?: number
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
  }

  export type PaymentLogCreateOrConnectWithoutOrderInput = {
    where: PaymentLogWhereUniqueInput
    create: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput>
  }

  export type PaymentLogCreateManyOrderInputEnvelope = {
    data: PaymentLogCreateManyOrderInput | PaymentLogCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutOrderInput = {
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutOrderInput = {
    id?: number
    userId: number
    propertyId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutOrderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
  }

  export type ReviewCreateManyOrderInputEnvelope = {
    data: ReviewCreateManyOrderInput | ReviewCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RoomUpsertWithoutOrdersInput = {
    update: XOR<RoomUpdateWithoutOrdersInput, RoomUncheckedUpdateWithoutOrdersInput>
    create: XOR<RoomCreateWithoutOrdersInput, RoomUncheckedCreateWithoutOrdersInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutOrdersInput, RoomUncheckedUpdateWithoutOrdersInput>
  }

  export type RoomUpdateWithoutOrdersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakRates?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peakRates?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PaymentLogUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentLogWhereUniqueInput
    update: XOR<PaymentLogUpdateWithoutOrderInput, PaymentLogUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentLogCreateWithoutOrderInput, PaymentLogUncheckedCreateWithoutOrderInput>
  }

  export type PaymentLogUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentLogWhereUniqueInput
    data: XOR<PaymentLogUpdateWithoutOrderInput, PaymentLogUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentLogUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentLogScalarWhereInput
    data: XOR<PaymentLogUpdateManyMutationInput, PaymentLogUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentLogScalarWhereInput = {
    AND?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
    OR?: PaymentLogScalarWhereInput[]
    NOT?: PaymentLogScalarWhereInput | PaymentLogScalarWhereInput[]
    id?: IntFilter<"PaymentLog"> | number
    orderId?: IntFilter<"PaymentLog"> | number
    status?: EnumPAYMENT_STATUSFilter<"PaymentLog"> | $Enums.PAYMENT_STATUS
    note?: StringNullableFilter<"PaymentLog"> | string | null
    createdAt?: DateTimeFilter<"PaymentLog"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutOrderInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
    create: XOR<ReviewCreateWithoutOrderInput, ReviewUncheckedCreateWithoutOrderInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutOrderInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutOrderInput, ReviewUncheckedUpdateWithoutOrderInput>
  }

  export type ReviewUpdateManyWithWhereWithoutOrderInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutPaymentLogsInput = {
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
    reviews?: ReviewCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentLogsInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentLogsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentLogsInput, OrderUncheckedCreateWithoutPaymentLogsInput>
  }

  export type OrderUpsertWithoutPaymentLogsInput = {
    update: XOR<OrderUpdateWithoutPaymentLogsInput, OrderUncheckedUpdateWithoutPaymentLogsInput>
    create: XOR<OrderCreateWithoutPaymentLogsInput, OrderUncheckedCreateWithoutPaymentLogsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentLogsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentLogsInput, OrderUncheckedUpdateWithoutPaymentLogsInput>
  }

  export type OrderUpdateWithoutPaymentLogsInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    reviews?: ReviewUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateWithoutReviewsInput = {
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    room: RoomCreateNestedOneWithoutOrdersInput
    user: UserCreateNestedOneWithoutOrdersInput
    paymentLogs?: PaymentLogCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutReviewsInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentLogs?: PaymentLogUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutReviewsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutReviewsInput, OrderUncheckedCreateWithoutReviewsInput>
  }

  export type PropertyCreateWithoutReviewsInput = {
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    tenant: TenantCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutReviewsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutReviewsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenCreateNestedManyWithoutUserInput
    orders?: OrderCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenCreateNestedManyWithoutUserInput
    tenants?: TenantCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    role: $Enums.ROLE
    name: string
    email: string
    password?: string | null
    isVerified?: boolean
    profileImage?: string | null
    provider?: string | null
    providerAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    emailTokens?: EmailTokenUncheckedCreateNestedManyWithoutUserInput
    orders?: OrderUncheckedCreateNestedManyWithoutUserInput
    passwordResetTokens?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
    tenants?: TenantUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type OrderUpsertWithoutReviewsInput = {
    update: XOR<OrderUpdateWithoutReviewsInput, OrderUncheckedUpdateWithoutReviewsInput>
    create: XOR<OrderCreateWithoutReviewsInput, OrderUncheckedCreateWithoutReviewsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutReviewsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutReviewsInput, OrderUncheckedUpdateWithoutReviewsInput>
  }

  export type OrderUpdateWithoutReviewsInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutOrdersNestedInput
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type PropertyUpsertWithoutReviewsInput = {
    update: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUpdateManyWithoutUserNestedInput
    orders?: OrderUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUpdateManyWithoutUserNestedInput
    tenants?: TenantUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: NullableStringFieldUpdateOperationsInput | string | null
    providerAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailTokens?: EmailTokenUncheckedUpdateManyWithoutUserNestedInput
    orders?: OrderUncheckedUpdateManyWithoutUserNestedInput
    passwordResetTokens?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
    tenants?: TenantUncheckedUpdateOneWithoutUserNestedInput
  }

  export type EmailTokenCreateManyUserInput = {
    id?: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type OrderCreateManyUserInput = {
    id?: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: number
    token: string
    expiresAt?: Date | string | null
    used?: boolean
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    propertyId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EmailTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmailTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OrderUpdateWithoutUserInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutOrdersNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReviewUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutReviewsNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyTenantInput = {
    id?: number
    categoryId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyCategoryInput = {
    id?: number
    tenantId: number
    name: string
    description: string
    address: string
    image: string
    latitude: number
    longitude: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantUpdateOneRequiredWithoutPropertiesNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    userId: number
    orderId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomCreateManyPropertyInput = {
    id?: number
    name: string
    description: string
    basePrice: number
    capacity: number
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    url: string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutRoomNestedInput
    peakRates?: PeakSeasonRateUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    basePrice?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
  }

  export type OrderCreateManyRoomInput = {
    id?: number
    userId: number
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    status: $Enums.ORDER_STATUS
    paymentProof?: string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PeakSeasonRateCreateManyRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    type: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomAvailabilityCreateManyRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
  }

  export type OrderUpdateWithoutRoomInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    paymentLogs?: PaymentLogUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentLogs?: PaymentLogUncheckedUpdateManyWithoutOrderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | $Enums.ORDER_STATUS
    paymentProof?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUpdateWithoutRoomInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeakSeasonRateUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUpdateWithoutRoomInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentLogCreateManyOrderInput = {
    id?: number
    status: $Enums.PAYMENT_STATUS
    note?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyOrderInput = {
    id?: number
    userId: number
    propertyId: number
    rating: number
    comment?: string | null
    reply?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentLogUpdateWithoutOrderInput = {
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentLogUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | $Enums.PAYMENT_STATUS
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutOrderInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reply?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}