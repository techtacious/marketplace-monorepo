/**
 * Marketplace Rest API
 * Marketplace Rest API
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: techtacious@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { User } from './user';


export interface AuthLoginResponse { 
    user?: User;
    /**
     * JWT Token
     */
    token?: string;
}

