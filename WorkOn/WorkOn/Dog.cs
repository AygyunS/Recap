using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkOn
{
    class Dog : Animal
    {
        public string sound2 { get; set; } = "Barkkk!";

        public new void MakeSound()
        {
            Console.WriteLine($"{Name} says {Sound} and {sound2}");

        }

        public Dog(string name = " No name ", string sound = "No sound ", string sound2 = "No sound 2")
        :base(name, sound)
        {
            sound2 = sound2;
        }
    }
}
