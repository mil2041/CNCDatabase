const pool = require('../db');

module.exports = app => {
  app.get('/persons', (request, response, next) => {
    pool.query('SELECT * FROM "noncodingmutations"', (err, res) => {
      if (err) return next(err);

      response.json(res);
    });
  });

  app.get('/geneName/:genename', (request, response, next) => {
    const { genename } = request.params;
    pool.query(
      'SELECT * FROM "noncodingmutations" WHERE "geneName" = $1',
      [genename],
      (err, res) => {
        if (err) return next(err);

        response.json(res);
      }
    );
  });

  app.get('/api/geneSymbol', (request, response, next) => {
    //res.json({ geneSymbol: req.query.query });

    //const { genename } = request.query.hgncID;
    //response.json({ name: request.query.hgncID });
    //
    pool.query(
      'SELECT * FROM "noncodingdrivers" WHERE "gene" = $1',
      //["TERT"],
      //'SELECT * FROM "noncodingmutations" WHERE "geneName" = $1',
      [request.query.hgncID],
      (err, res) => {
        if (err) return next(err);

        response.json(res);
      }
    );
  });

  app.get('/api/gene_summary', (request, response, next) => {
    //res.json({ geneSymbol: req.query.query });

    //const { genename } = request.query.hgncID;
    //response.json({ name: request.query.hgncID });
    //
    pool.query(
      'SELECT symbol, name, locus_group, locus_type,status, ensembl_gene_id, hgnc_id, entrez_id, alias_symbol, gene_family,refseq_accession,omim_id FROM "gene_summary_test" WHERE "symbol" = $1',
      //["TERT"],
      //'SELECT * FROM "noncodingmutations" WHERE "geneName" = $1',
      [request.query.hgncID],
      (err, res) => {
        if (err) return next(err);

        response.json(res);
      }
    );
  });




//########

 app.get('/api/v1.0/tumorType', (request, response, next) => {
    //res.json({ geneSymbol: req.query.query });

    //const { genename } = request.query.hgncID;
    //response.json({ name: request.query.hgncID });
    //
    pool.query(
      //'SELECT * FROM "codingmutations" WHERE "tumorType" = $1',
      'SELECT * FROM "noncodingdrivers" WHERE "cancerType" = $1',
      [request.query.tumorType],
      (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
      }
    );
  });



//#########


  app.get('/chr/:chr', (request, response, next) => {
    const { chr } = request.params;
    pool.query(
      'SELECT * FROM "noncodingmutations" WHERE chr = $1',
      [chr],
      (err, res) => {
        if (err) return next(err);

        response.json(res);
      }
    );
  });

  app.get('/', (req, res) => {
    res.send({ hi: 'there' });
  });
};
