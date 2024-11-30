'use strict';

/**
 * book-keyword service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::book-keyword.book-keyword');
