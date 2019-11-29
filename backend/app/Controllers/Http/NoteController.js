'use strict'
const Note = use('App/Models/Note'),
  Database = use('Database')


/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with notes
 */
class NoteController {
  /**
   * Show a list of all notes.
   * GET notes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    return response.json({
      data: await Note.all()
    })
  }

  /**
   * Create/save a new note.
   * POST notes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    if (!request.all().hasOwnProperty('title')) {
      return response.json({
        message: 'Title field is required'
      })
    }

    const
      newNote = new Note(),
      { title, content } = request.all()

    newNote.title = title
    newNote.content = content

    await newNote.save()

    return response.json({
      message: 'data saved',
      data: newNote
    })

  }

  /**
   * Display a single note.
   * GET notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const { id } = params,
      note = await Note.find(id),
      message = note ? 'data found' : 'data not found'

    return response.json({
      message: message,
      data: note
    })

  }

  /**
   * Update note details.
   * PUT or PATCH notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    if (!request.all().hasOwnProperty('title')) {
      return response.json({
        message: 'Title field is required'
      })
    }

    const { id } = params,
      note = await Note.find(id)

    if (!note) {
      return response.json({
        message: 'data not found',
        data: note
      })
    }

    const { title, content } = request.all()
    note.title = title
    note.content = content
    note.save()

    return response.json({
      message: 'data updated',
      data: note
    })

  }

  /**
   * Delete a note with id.
   * DELETE notes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const { id } = request.all(),
      note = await Note.find(id)
    if (!note) {
      return response.json({
        message: 'data not found',
      })
    }
    await note.delete()
    return response.json({
      message: 'data deleted',
    })
  }

  /**
   * get user note with pagination.
   * POST notes/
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async pageSearch({ request, response }) {
    let { page = 1, perPage = 10, orderBy = 'id', direction = 'asc' } = request.all()
    return response.json({
      data: await Database
        .table('notes')
        .orderBy(orderBy, direction)
        .paginate(page, perPage)
    })
  }
}

module.exports = NoteController
