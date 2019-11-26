'use strict'
const Note = use('App/Models/Note')

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
    response.send({
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
      return response.send({
        message: 'Title field is required'
      })
    }

    const
      newNote = new Note(),
      { title, content } = request.all()

    newNote.title = title
    newNote.content = content

    await newNote.save()

    return response.send({
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

    return response.send({
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
      return response.send({
        message: 'Title field is required'
      })
    }

    const { id } = params,
      note = await Note.find(id)

    if (!note) {
      return response.send({
        message: 'data not found',
        data: note
      })
    }

    const { title, content } = request.all()
    note.title = title
    note.content = content
    note.save()

    return response.send({
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
    const { id } = params,
      note = await Note.find(id)

    if (!note) {
      return response.send({
        message: 'data not found',
      })
    }
    await user.delete()
    return request.send({
      message: 'data deleted',
    })
  }
}

module.exports = NoteController
