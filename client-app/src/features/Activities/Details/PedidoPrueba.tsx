import React, { Fragment } from "react";

import {
  Table,
  Segment,
  Button,
  Label,
  Icon,
  Grid,
  Divider,
  Header,
  Search,
  SegmentGroup,
} from "semantic-ui-react";

const PedidoPrueba = () => {
  const headerPedido = (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Cliente</Table.HeaderCell>
        <Table.HeaderCell>Comentario</Table.HeaderCell>
        <Table.HeaderCell>Condicion</Table.HeaderCell>
        <Table.HeaderCell>Fecha</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );

  const bodyPedido = (
    <Table.Body>
      <Table.Row>
        <Table.Cell>Federico Von Muhlinen</Table.Cell>
        <Table.Cell>Descripcion goes here my friend, del pedido.</Table.Cell>
        <Table.Cell>
          <Label color="green">
            <Icon name="mail" /> Particular
          </Label>
          <Label color="red">
            <Icon name="mail" /> Debe
          </Label>
        </Table.Cell>
        <Table.Cell>12-04-2020 20:30:12</Table.Cell>
      </Table.Row>
    </Table.Body>
  );

  const headerProductos = (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Medicamento</Table.HeaderCell>
        <Table.HeaderCell>Cantidad</Table.HeaderCell>
        <Table.HeaderCell>Estado</Table.HeaderCell>
        <Table.HeaderCell />
      </Table.Row>
    </Table.Header>
  );

  const bodyProductos = (
    <Table.Body>
      <Table.Row>
        <Table.Cell>Lotrial 10</Table.Cell>
        <Table.Cell>1</Table.Cell>
        <Table.Cell>Llego</Table.Cell>
        <Table.Cell>
          <Button compact>Pasar de estado</Button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Ibupirac 400</Table.Cell>
        <Table.Cell>3</Table.Cell>
        <Table.Cell>Entregado</Table.Cell>
        <Table.Cell>
          <Button compact>Pasar de estado</Button>
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Alprazolan</Table.Cell>
        <Table.Cell>2</Table.Cell>
        <Table.Cell>Llego</Table.Cell>
        <Table.Cell>
          <Button compact>Pasar de estado</Button>
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );

  return (
    <Fragment>
      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>

                {/* <DateTimePicker/> */}

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                  {bodyProductos}
                  {bodyProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                  {bodyProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>

      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>
      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                  {bodyProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>

      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                  {bodyProductos}
                  {bodyProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>

      <Segment.Group>
        <Segment color="green">
          <Grid>
            <Grid.Row>
              <Grid.Column width={4}>
                <h2>Federico Miguel Von Muhlinen</h2>
                <Divider />
                <span>
                  <Icon name="calendar alternate" /> 12-04-2020 20:30:12
                </span>
                <p />
                Descripcion goes here my friend, del pedido. Descripcion goes
                here my friend, del pedido.
                <p />
                <Label color="green">Particular</Label>
                <Label color="red">Debe</Label>
              </Grid.Column>

              <Grid.Column width={12}>
                <Table attached basic="very">
                  {headerProductos}
                  {bodyProductos}
                  {bodyProductos}
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment clearing>
          <Button.Group floated="right">
            {/* <Button>
              <Icon name="mail" />
              One
            </Button> */}
            <Button>
              <Icon name="wrench" />
              Editar
            </Button>
          </Button.Group>
        </Segment>
      </Segment.Group>
    </Fragment>
  );
};

export default PedidoPrueba;
