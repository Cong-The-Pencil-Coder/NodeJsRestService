const express = require('express');

const multer = require('multer');

const upload = multer();

const { getAllPersons, newForm, createPerson, getPerson, editForm, updatePerson, deletePerson } = require('../controllers/persons.cjs');

const router = express.Router();

/**
 * Index operation.
 * 
 * Displays all persons
 */
router.get('', getAllPersons);

/**
 * New operation.
 * 
 * Shows form for new person
 */
router.get('/new', newForm);

/**
 * Create operation.
 * 
 * Creates a new person
 */
router.post('', upload.none(), createPerson);

/**
 * Show operation.
 * 
 * Shows one specified person
 */
router.get('/:id', getPerson);

/**
 * Edit operation.
 * 
 * Shows edit form for one person
 */
router.get('/:id/edit', editForm);

/**
 * Update operation.
 * 
 * Updates a particular person
 */
router.put('/:id', updatePerson);

/**
 * Destroy operation.
 * 
 * Deletes a particular person
 */
router.delete('/:id', deletePerson);

module.exports = router;