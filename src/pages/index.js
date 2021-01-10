import React from "react"
import { useQueryParam, NumberParam } from "use-query-params"
import { shuffle } from 'shuffle-seed'

const UseQueryParamExample = () => {
  // something like: ?x=123&foo=bar in the URL
  const [seed, setSeed] = useQueryParam("seed", NumberParam)
  const [nPlayers, setNPlayers] = useQueryParam("nplayers", NumberParam)
  const [position, setPosition] = useQueryParam("position", NumberParam)

  return (
    <div>
      {shuffle({
        3: ['Seherin', 'Werwolf', 'Dorfi'],
        4: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi'],
        5: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi'],
        6: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi', 'Dorfi'],
        7: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi', 'Dorfi', 'Werwolf'],
        8: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi', 'Dorfi', 'Werwolf', 'Dorfi'],
        9: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi', 'Dorfi', 'Werwolf', 'Freimaurer', 'Freimaurer'],
        10: ['Seherin', 'Werwolf', 'Dorfi', 'Dorfi', 'Dorfi', 'Dorfi', 'Werwolf', 'Freimaurer', 'Freimaurer', 'Dorfi']
        }[nPlayers || 3], seed || 123)[position || 0]
      }
    </div>
  );
};

export default UseQueryParamExample
