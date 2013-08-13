/**
 * Blockly Demo: Maze
 *
 * Copyright 2012 Google Inc.
 * http://blockly.googlecode.com/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Demonstration of Blockly: Solving a maze.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

// Extensions to Blockly's language and JavaScript generator.

Blockly.JavaScript = Blockly.Generator.get('JavaScript');

Blockly.Language.maze_moveForward = {
  // Block for moving forward.
  helpUrl: 'http://code.google.com/p/blockly/wiki/Move',
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('moveForward'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('moveForwardTooltip'));
  }
};

Blockly.JavaScript.maze_moveForward = function() {
  // Generate JavaScript for moving forward.
  return 'Maze.moveForward(\'block_id_' + this.id + '\');\n';
};

// Nan's
Blockly.Language.maze_putDownBall = {
  // Block for putting down a ball.
  helpUrl: 'http://code.google.com/p/blockly/wiki/PutDown',
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('putDownBall'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('putDownBallTooltip'));
  }
};

Blockly.JavaScript.maze_putDownBall = function() {
  // Generate JavaScript for putting down a ball.
  return 'Maze.putDownBall(\'block_id_' + this.id + '\');\n';
};

// Nan's
Blockly.Language.maze_pickUpBall = {
  // Block for putting down a ball.
  helpUrl: 'http://code.google.com/p/blockly/wiki/PickUp',
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('pickUpBall'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('pickUpBallTooltip'));
  }
};

Blockly.JavaScript.maze_pickUpBall = function() {
  // Generate JavaScript for putting down a ball.
  return 'Maze.pickUpBall(\'block_id_' + this.id + '\');\n';
};

Blockly.Language.maze_turn = {
  // Block for turning left or right.
  helpUrl: 'http://code.google.com/p/blockly/wiki/Turn',
  init: function() {
    this.setColour(290);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.DIRECTIONS), 'DIR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('turnTooltip'));
  }
};

Blockly.Language.maze_turn.DIRECTIONS =
    [[BlocklyApps.getMsg('turnLeft') + ' \u27F2', 'turnLeft'],
     [BlocklyApps.getMsg('turnRight') + ' \u27F3', 'turnRight']];

Blockly.JavaScript.maze_turn = function() {
  // Generate JavaScript for turning left or right.
  var dir = this.getTitleValue('DIR');
  return 'Maze.' + dir + '(\'block_id_' + this.id + '\');\n';
};

Blockly.Language.maze_if = {
  // Block for 'if' conditional if there is a path.
  helpUrl: '',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle('if');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.DIRECTIONS), 'DIR');
    this.setInputsInline(true);
    this.appendStatementInput('DO')
        .appendTitle(BlocklyApps.getMsg('doCode'));
    this.setTooltip(BlocklyApps.getMsg('ifTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript.maze_if = function() {
  // Generate JavaScript for 'if' conditional if there is a path.
  var argument = 'Maze.' + this.getTitleValue('DIR') +
      '(\'block_id_' + this.id + '\')';
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  var code = 'if (' + argument + ') {\n' + branch + '}\n';
  return code;
};

Blockly.Language.maze_if.DIRECTIONS = [
     [BlocklyApps.getMsg('ballsPresent'), 'Maze.ballsPresent()'],
     [BlocklyApps.getMsg('noBallsPresent'), '!Maze.ballsPresent()'],
     [BlocklyApps.getMsg('pathAhead'), 'Maze.isPathForward()'],
     [BlocklyApps.getMsg('noPathAhead'), '!Maze.isPathForward()']
];


Blockly.Language.maze_ifElse = {
  // Block for 'if/else' conditional if there is a path.
  helpUrl: '',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle('if');
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown(this.DIRECTIONS), 'DIR');
    this.setInputsInline(true);
    this.appendStatementInput('DO')
        .appendTitle(BlocklyApps.getMsg('doCode'));
    this.appendStatementInput('ELSE')
        .appendTitle(BlocklyApps.getMsg('elseCode'));
    this.setTooltip(BlocklyApps.getMsg('ifelseTooltip'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript.maze_ifElse = function() {
  // Generate JavaScript for 'if/else' conditional if there is a path.
  var argument = 'Maze.' + this.getTitleValue('DIR') +
      '(\'block_id_' + this.id + '\')';
  var branch0 = Blockly.JavaScript.statementToCode(this, 'DO');
  var branch1 = Blockly.JavaScript.statementToCode(this, 'ELSE');
  var code = 'if (' + argument + ') {\n' + branch0 +
             '} else {\n' + branch1 + '}\n';
  return code;
};

Blockly.Language.maze_ifElse.DIRECTIONS =
    Blockly.Language.maze_if.DIRECTIONS;

Blockly.Language.maze_untilBlocked = {
  helpUrl: 'http://code.google.com/p/blockly/wiki/Repeat',
  init: function() {
    this.setColour(120);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('repeatUntil'));
    this.appendStatementInput('DO').appendTitle(BlocklyApps.getMsg('doCode'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(BlocklyApps.getMsg('whileTooltip'));
  }
};


Blockly.JavaScript.maze_untilBlocked = function() {
  var branch = Blockly.JavaScript.statementToCode(this, 'DO');
  return 'while (Maze.isPathForward()) {\n' + branch + '}\n';
};

Blockly.Language.maze_putDown5 = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('putDown5'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript.maze_putDown5 = function() {
  return 'for (var i = 0; i < 5; i++) {\n' +
    Blockly.JavaScript.maze_putDownBall() + '\n}\n';
};

Blockly.Language.maze_pickupTower = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('pickupTower'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript.maze_pickupTower = function() {
  return 'for (var i = 0; i < 3; i++) {\n' +
    Blockly.JavaScript.maze_pickUpBall() + ';\n' +
    Blockly.JavaScript.maze_moveForward() + '\n}\n';
};

Blockly.Language.maze_putdownTower = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle(BlocklyApps.getMsg('putdownTower'));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  }
};

Blockly.JavaScript.maze_putdownTower = function() {
  return 'for (var i = 0; i < 3; i++) {\n' +
    Blockly.JavaScript.maze_putDownBall() + ';\n' +
    Blockly.JavaScript.maze_moveForward() + '\n}\n';
};