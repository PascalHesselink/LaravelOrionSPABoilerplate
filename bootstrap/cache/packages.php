<?php return [
        'facade/ignition'        =>
                [
                        'providers' =>
                                [
                                        0 => 'Facade\\Ignition\\IgnitionServiceProvider',
                                ],
                        'aliases'   =>
                                [
                                        'Flare' => 'Facade\\Ignition\\Facades\\Flare',
                                ],
                ],
        'fideloper/proxy'        =>
                [
                        'providers' =>
                                [
                                        0 => 'Fideloper\\Proxy\\TrustedProxyServiceProvider',
                                ],
                ],
        'fruitcake/laravel-cors' =>
                [
                        'providers' =>
                                [
                                        0 => 'Fruitcake\\Cors\\CorsServiceProvider',
                                ],
                ],
        'laravel/sail'           =>
                [
                        'providers' =>
                                [
                                        0 => 'Laravel\\Sail\\SailServiceProvider',
                                ],
                ],
        'laravel/sanctum'        =>
                [
                        'providers' =>
                                [
                                        0 => 'Laravel\\Sanctum\\SanctumServiceProvider',
                                ],
                ],
        'laravel/tinker'         =>
                [
                        'providers' =>
                                [
                                        0 => 'Laravel\\Tinker\\TinkerServiceProvider',
                                ],
                ],
        'nesbot/carbon'          =>
                [
                        'providers' =>
                                [
                                        0 => 'Carbon\\Laravel\\ServiceProvider',
                                ],
                ],
        'nunomaduro/collision'   =>
                [
                        'providers' =>
                                [
                                        0 => 'NunoMaduro\\Collision\\Adapters\\Laravel\\CollisionServiceProvider',
                                ],
                ],
        'tailflow/laravel-orion' =>
                [
                        'providers' =>
                                [
                                        0 => 'Orion\\OrionServiceProvider',
                                ],
                        'aliases'   =>
                                [
                                        'Orion' => 'Orion\\Facades\\Orion',
                                ],
                ],
];
