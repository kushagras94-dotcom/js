/*JavaScript Execution Context
{} => Global EC
1. Global Exectution Context
2. Function Execution Context
3. Eval Execution Context

-> Memory *Creation Phase*
-> Execution Phase

S-1 Global Execution->this
S-2 Memory Phase-> val1->undefined
->val2->undefined
->addNum-> definition

S-3 Execution Phase val1<-10  val2<-5
addNum-> ++++++When fn runs then every time => (new var environment + Execution thread) context made++++++ then deleted after its work
(mem phase then execuiton context) return to global EC

--------------CALLBACKS--------
LIFO
*/