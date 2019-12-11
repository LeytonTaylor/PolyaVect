<script type="module">
      import {Runtime, Inspector} from "https://cdn.jsdelivr.net/npm/@observablehq/runtime@4/dist/runtime.js";
      import define from "https://api.observablehq.com/@vinicius-mello/polya-vector-field.js?v=3";
      const inspect = Inspector.into("#observablehq-8e158879");
      (new Runtime).module(define, name => (name === "viewof plot") && inspect());
 </script>
