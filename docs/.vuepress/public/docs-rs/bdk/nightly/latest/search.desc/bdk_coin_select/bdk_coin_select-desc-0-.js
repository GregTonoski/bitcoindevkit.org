searchState.loadedDescShard("bdk_coin_select", 0, "<code>Bnb</code> represents the current state of the BnB algorithm.\nDetermines how we should limit rounds of branch and bound.\nStrategy in which we should branch.\n<code>CoinSelector</code> selects and deselects from a set of …\nWe continue exploring subtrees of this node, starting with …\nClosure to decide the branching strategy, alongside a …\nMin absolute fee is not met\nMin drain value is not met\nWe skip both the inclusion and omission branches of this …\nWe continue exploring ONLY the omission branch of this …\nTxin “base” fields include <code>outpoint</code> (32+4) and …\nThe target fee (given the feerate) is not met\nThe target is not met\nA <code>WeightedValue</code> represents an input candidate for …\nCompare the advertised score with the current best. The …\nAttempt to backtrack to the previously selected node’s …\nThe weight of the template transaction, including fixed …\nReturns the <code>ExcessStrategy</code> that results in the least waste.\nThis is a variation of the Branch and Bound Coin Selection …\nCurrent excess.\nCurrent weight of template tx + selected inputs.\nAdditional weight if we include the drain (change) output.\nThis is the effective target value.\nEffective value of this input candidate: …\nReturns feerate in sats/wu.\nContinue down this branch and skip the inclusion branch if …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe total number of inputs; so we can calculate extra …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTurns our <code>Bnb</code> state into an iterator.\nWhether this <code>WeightedValue</code> contains at least one segwit …\nThe feerate\nAdditional leeway for the target value.\nThe minimum absolute fee. I.e., needed for RBF.\nMinimum value allowed for a drain (change) output.\nCreates a new <code>Bnb</code>.\nCreate a new <code>WeightedValue</code> that represents a single input.\nAbsolute value sum of all selected inputs.\nEffective value sum of all selected inputs.\nWaste sum of all selected inputs.\nWeight sum of all selected inputs.\nWeight of spending the drain (change) output in the future.\nThe feerate we should try and achieve in sats per weight …\nThe value we need to select. If the value is <code>None</code>, then …\nTotal value of the UTXO(s) that this <code>WeightedValue</code> …\nTotal weight of including this/these UTXO(s). <code>txin</code> fields: …")